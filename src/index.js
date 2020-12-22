import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {
  Button, Form, Container, Row, Col, Card, Tab, Nav, Alert
} from 'react-bootstrap'
import { useForm } from "react-hook-form"
import Papa from 'papaparse'
import {
  LocalUserColumnsForm, LocalUserDefaultsForm,
  RadiusColumnsForm, RadiusDefaultsForm
} from './forms'
import importScript from './scriptGenerator'

const CsvParse = async (input, config) => {
  return new Promise(resolve => {
    Papa.parse(input, {...config, complete: resolve})
  })
}

const App = () => {
  const {handleSubmit, register} = useForm()
  const [importColumns, setImportColumns] = useState([])
  const [script, setScript] = useState("")
  const [importTo, setImportTo] = useState("pfsense")

  const onSubmit = (options) => {
    const { defaults, columns, file, updateDetails, updatePaswwords } = options
    CsvParse(file[0], {header: true}).then(r => {
      const users = r.data.map(row => {
        const out = {}
        Object.entries(columns).forEach(([prop, col]) => {
          out[prop] = row[col]
        })
        return out
      })
      setScript(importScript({
        data: Papa.unparse(users, {header: false}),
        defaults, columns: Object.keys(columns),
        target: importTo,
        updateDetails, updatePaswwords
      }))
    })
  }

  const fileSelect = e => {
    Papa.parse(e.currentTarget.files[0], {
      preview: 1, complete: r => setImportColumns(
        ["", ...r.data[0]]
      )
    })
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={6}>
            <Tab.Container defaultActiveKey="input">
              <Card>
                <Card.Header>
                  <Nav variant="tabs" className="card-header-tabs">
                    <Nav.Item>
                      <Nav.Link eventKey="input">Input options</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="defaults">Default values</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="options">Options</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body>
                  <Tab.Content>
                    <Tab.Pane eventKey="input">
                      <Form.Group controlId="file">
                        <Form.Label>CSV File</Form.Label>
                        <Form.Control name="file" type="file" ref={register} onChange={fileSelect} required/>
                      </Form.Group>
                      <Form.Group controlId="importTo">
                        <Form.Label>Import to</Form.Label>
                        <Form.Control name="importTo" as="select" ref={register} onChange={e => setImportTo(e.currentTarget.value)} required>
                          <option value="pfsense">Local user database</option>
                          <option value="radius">FreeRADIUS user database</option>
                        </Form.Control>
                      </Form.Group>
                      {(importTo === "radius") ? (
                        <RadiusColumnsForm columns={importColumns} register={register}/>
                      ) : (
                        <LocalUserColumnsForm columns={importColumns} register={register}/>
                      )}
                    </Tab.Pane>
                    <Tab.Pane eventKey="defaults">
                    {(importTo === "radius") ? (
                        <RadiusDefaultsForm register={register}/>
                      ) : (
                        <LocalUserDefaultsForm register={register}/>
                      )}
                    </Tab.Pane>
                    <Tab.Pane eventKey="options">
                      <Form.Group>
                        <Form.Check label="Update existing user details" name="updateDetails" ref={register}/>
                      </Form.Group>
                      <Form.Group>
                        <Form.Check label="Update existing user password" name="updatePaswwords" ref={register}/>
                      </Form.Group>
                    </Tab.Pane>
                  </Tab.Content>
                </Card.Body>
                <Card.Footer>
                  <Tab.Content>
                    <Button type="submit" variant="primary">Generate PHP script</Button>
                  </Tab.Content>
                </Card.Footer>
              </Card>
            </Tab.Container>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Header>Generated Script</Card.Header>
              <Alert variant="warning" className="mb-0">
                <Alert.Link href="https://docs.netgate.com/pfsense/en/latest/diagnostics/command-prompt.html#php-execute" target="_blank">
                  Running PHP commands on pfSense
                </Alert.Link>
              </Alert>
              <Card.Body>
                <pre>{script}</pre>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
