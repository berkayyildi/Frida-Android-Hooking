function inspectJsObject(obj) {
  console.log(JSON.stringify(obj))
  for (var prop in obj) {
    // ignore internal properties, touching them can be dangerous
    const val = prop.startsWith("$") ? "" : obj[prop]

    if (obj.hasOwnProperty(prop)) {
      console.log("\tself." + prop + " : " + val)
    } else {
      console.log("\t" + prop + " : " + val)
    }
  }
}
