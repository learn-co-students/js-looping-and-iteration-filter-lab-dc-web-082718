// Code your solution in this file
function findMatching (array, string) {
  return array.filter(function (name) {
    return name.toLowerCase() === string.toLowerCase()
  })
}

function fuzzyMatch(array, partialName) {
  let lengthOfName = partialName.length
  return array.filter(function (startsWith) {
    return startsWith.slice(0, lengthOfName) === partialName
  })
}

function matchName(array, string) {
  return array.filter(function (nameKey) {
    return nameKey.name === string
  })
}
