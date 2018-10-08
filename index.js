// Code your solution in this file
function findMatching(col, name) {
  arr = col.filter(driver => driver.toUpperCase() == name.toUpperCase())
  return arr
}

function fuzzyMatch(col, letters) {
  arr = col.filter(driver => driver.slice(0,2) == letters)
  return arr
}

function matchName(col, name) {
  arr = col.filter(driver => driver.name === name)
  return arr
}
