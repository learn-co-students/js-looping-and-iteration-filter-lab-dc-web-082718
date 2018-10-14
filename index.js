function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() == name.toLowerCase())
}

function fuzzyMatch(drivers, str) {
  return drivers.filter(driver => driver.slice(0, str.length) == str)
}

function matchName(drivers, str) {
  return drivers.filter(driver => driver.name == str)
}
