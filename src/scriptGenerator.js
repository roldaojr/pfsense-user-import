const targets = {
  pfsense: {
    configPath: ["system", "user"],
    usernameProp: "name",
    passwordProp: "bcrypt-hash",
    passwordHash: v => {
      return `password_hash(${v}, PASSWORD_BCRYPT)`
    }
  },
  radius: {
    configPath: ["installedpackages", "freeradius", "config"],
    usernameProp: "varusersusername",
    passwordProp: "varuserspassword",
    passwordHash: v => v
  }
}

export default ({
  defaults, columns, data, target, updateDetails, updatePaswwords,
}) => {
  const props = targets[target]
  const configVar = `$config${props.configPath.map(i => `['${i}']`).join("")}`
  return `$fields = explode(",", "${Object.keys(defaults).join(",")}");
$defaults = explode(",", "${Object.values(defaults).join(",")}");
$header = explode(",", "${columns.join(",")}");
$csv = <<<CSV
${data}
CSV;
$updateDetails = ${(updateDetails) ? "true" : "false"};
$updatePaswwords = ${(updatePaswwords) ? "true" : "false"};
if(!isset(${configVar})) {
  ${configVar} = array();
}
$usernames = array_column(${configVar}, "${props.usernameProp}");
foreach(str_getcsv($csv, "\\n") as $line) {
  $user = array_merge(
  	array_combine($fields, $defaults),
  	array_combine($header, str_getcsv($line))
  );
  $index = array_search($user["${props.usernameProp}"], $usernames);
  if($index === false) {
    $user["${props.passwordProp}"] = ${props.passwordHash(`$user["${props.passwordProp}"]`)};
    ${configVar}[] = $user;
    print("User \${user["${props.usernameProp}"]} inserted\\n");
  } else {
    if($updateDetails || $updatePaswwords) {
      foreach(array_combine($header, str_getcsv($line)) as $key => $value) {
        if($updateDetails && $key != "${props.passwordProp}") {
          ${configVar}[$index][$key] = $value;
        }
        if($updatePaswwords && $key == "${props.passwordProp}") {
          ${configVar}[$index][$key] = ${props.passwordHash('$value')};
        }
      }
      print("User \${user["${props.usernameProp}"]} updated\\n");
    } else {
      print("User \${user["${props.usernameProp}"]} ignored\\n");
    }
  }
}
write_config();
reload_all();`
}
