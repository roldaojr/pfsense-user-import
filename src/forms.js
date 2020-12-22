import React from 'react'
import { Form } from 'react-bootstrap'

export const LocalUserColumnsForm = ({register, ...props}) => {
  return (
    <React.Fragment>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control name="columns.name" as="select" ref={register} required>
          {props.columns.map(col => (<option key={col} value={col}>{col}</option>))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control name="columns.bcrypt-hash" as="select" ref={register} required>
          {props.columns.map(col => (<option key={col} value={col}>{col}</option>))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Full name</Form.Label>
        <Form.Control name="columns.descr" as="select" ref={register}>
          {props.columns.map(col => (<option key={col} value={col}>{col}</option>))}
        </Form.Control>
      </Form.Group>
    </React.Fragment>
  )
}

export const RadiusColumnsForm = ({register, ...props}) => {
  return (
    <React.Fragment>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control name="columns.varusersusername" as="select" ref={register} required>
          {props.columns.map(col => (<option key={col} value={col}>{col}</option>))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control name="columns.varuserspassword" as="select" ref={register} required>
          {props.columns.map(col => (<option key={col} value={col}>{col}</option>))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control name="columns.description" as="select" ref={register}>
          {props.columns.map(col => (<option key={col} value={col}>{col}</option>))}
        </Form.Control>
      </Form.Group>
    </React.Fragment>
  )
}

export const LocalUserDefaultsForm = ({register}) => {
  return (
    <React.Fragment>
      <input type="hidden" name="defaults.scope" value="user" ref={register}/>
      <input type="hidden" name="defaults.authorizedkeys" value="" ref={register}/>
      <input type="hidden" name="defaults.ipsecpsk" value="" ref={register}/>
      <Form.Group controlId="descr">
        <Form.Label>Full name</Form.Label>
        <Form.Control name="defaults.descr" defaultValue="Imported user" ref={register}/>
      </Form.Group>
      <Form.Group controlId="expires">
        <Form.Label>Expiration</Form.Label>
        <Form.Control name="defaults.expires" defaultValue="" ref={register}/>
      </Form.Group>
      <Form.Group controlId="dashboardcolumns">
        <Form.Label>Dashboard columns</Form.Label>
        <Form.Control name="defaults.dashboardcolumns" defaultValue="2" ref={register}/>
      </Form.Group>
      <Form.Group controlId="webguicss">
        <Form.Label>Theme</Form.Label>
        <Form.Control name="defaults.webguicss" defaultValue="pfSense.css" ref={register}/>
      </Form.Group>
    </React.Fragment>
  )
}


export const RadiusDefaultsForm = ({register}) => {
  return (
    <React.Fragment>
      <input type="hidden" name="defaults.sortable" value="" ref={register}/>
      <input type="hidden" name="defaults.varusersusername" value="" ref={register}/>
      <input type="hidden" name="defaults.varuserspassword" value="" ref={register}/>
      <Form.Group controlId="varuserspasswordencryption">
        <Form.Label>Password Encryption</Form.Label>
        <Form.Control name="defaults.varuserspasswordencryption" defaultValue="Cleartext-Password" ref={register}/>
      </Form.Group>
      <Form.Group controlId="varuserswisprredirectionurl">
        <Form.Label>Redirection URL</Form.Label>
        <Form.Control name="defaults.varuserswisprredirectionurl" defaultValue="" ref={register}/>
      </Form.Group>
      <Form.Group controlId="varuserssimultaneousconnect">
        <Form.Label>Number of Simultaneous Connections</Form.Label>
        <Form.Control name="defaults.varuserssimultaneousconnect" defaultValue="" ref={register}/>
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control name="defaults.description" defaultValue="imported user" ref={register}/>
      </Form.Group>
      <Form.Group controlId="varusersframedipaddress">
        <Form.Label>IPv4 Address</Form.Label>
        <Form.Control name="defaults.varusersframedipaddress" defaultValue="" ref={register}/>
      </Form.Group>
      <Form.Group controlId="varusersframedipnetmask">
        <Form.Label>Subnet Mask</Form.Label>
        <Form.Control name="defaults.varusersframedipnetmask" defaultValue="" ref={register}/>
      </Form.Group>
      <Form.Group controlId="varusersframedroute">
        <Form.Label>IPv4 Gateway</Form.Label>
        <Form.Control name="defaults.varusersframedroute" defaultValue="" ref={register}/>
      </Form.Group>
      <Form.Group controlId="varusersframedip6address">
        <Form.Label>IPv6 Address</Form.Label>
        <Form.Control name="defaults.varusersframedip6address" defaultValue="" ref={register}/>
      </Form.Group>
      <Form.Group controlId="varusersframedip6route">
        <Form.Label>IPv6 Gateway</Form.Label>
        <Form.Control name="defaults.varusersframedip6route" defaultValue="" ref={register}/>
      </Form.Group>
      <Form.Group controlId="varusersvlanid">
        <Form.Label>VLAN ID</Form.Label>
        <Form.Control name="defaults.varusersvlanid" defaultValue="" ref={register}/>
      </Form.Group>
      <Form.Group controlId="varusersexpiration">
        <Form.Label>Expiration Date</Form.Label>
        <Form.Control name="defaults.varusersexpiration" defaultValue="" ref={register}/>
      </Form.Group>
      <Form.Group controlId="varuserssessiontimeout">
        <Form.Label>Session Timeout</Form.Label>
        <Form.Control name="defaults.varuserssessiontimeout" defaultValue="" ref={register}/>
      </Form.Group>
      <Form.Group controlId="varuserslogintime">
        <Form.Label>Possible Login Times</Form.Label>
        <Form.Control name="defaults.varuserslogintime" defaultValue="" ref={register}/>
      </Form.Group>
      <Form.Group controlId="varusersamountoftime">
        <Form.Label>Amount of Time</Form.Label>
        <Form.Control name="defaults.varusersamountoftime" defaultValue="" ref={register}/>
      </Form.Group>
      <Form.Group controlId="varuserspointoftime">
        <Form.Label>Time Period</Form.Label>
        <Form.Control name="defaults.varuserspointoftime" defaultValue="Daily" ref={register}/>
      </Form.Group>
      <Form.Group controlId="varusersmaxtotaloctets">
        <Form.Label>Amount of Download and Upload Traffic</Form.Label>
        <Form.Control name="defaults.varusersmaxtotaloctets" defaultValue="" ref={register}/>
      </Form.Group>
      <Form.Group controlId="varusersmaxtotaloctetstimerange">
        <Form.Label>Bandwidth Time Period</Form.Label>
        <Form.Control name="defaults.varusersmaxtotaloctetstimerange" defaultValue="daily" ref={register}/>
      </Form.Group>
      <Form.Group controlId="varusersmaxbandwidthdown">
        <Form.Label>Maximum Bandwidth Down</Form.Label>
        <Form.Control name="defaults.varusersmaxbandwidthdown" defaultValue="" ref={register}/>
      </Form.Group>
      <Form.Group controlId="varusersmaxbandwidthup">
        <Form.Label>Maximum Bandwidth Up</Form.Label>
        <Form.Control name="defaults.varusersmaxbandwidthup" defaultValue="" ref={register}/>
      </Form.Group>
      <Form.Group controlId="varusersacctinteriminterval">
        <Form.Label>Accounting Interim Interval</Form.Label>
        <Form.Control name="defaults.varusersacctinteriminterval" defaultValue="" ref={register}/>
      </Form.Group>
      <Form.Group controlId="varuserstopadditionaloptions">
        <Form.Label>Additional RADIUS Attributes on the TOP of this entry</Form.Label>
        <Form.Control name="defaults.varuserstopadditionaloptions" as="textarea" ref={register}/>
      </Form.Group>
      <Form.Group controlId="varuserscheckitemsadditionaloptions">
        <Form.Label>Additional RADIUS Attributes (CHECK-ITEM)</Form.Label>
        <Form.Control name="defaults.varuserscheckitemsadditionaloptions" as="textarea" ref={register}/>
      </Form.Group>
      <Form.Group controlId="varusersreplyitemsadditionaloptions">
        <Form.Label>Additional RADIUS Attributes (REPLY-ITEM)</Form.Label>
        <Form.Control name="defaults.varusersreplyitemsadditionaloptions" as="textarea" ref={register}/>
      </Form.Group>
    </React.Fragment>
  )
}
