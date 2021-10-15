function findMatching(drivers, find) {
  return drivers.filter( possibleMatch =>
    possibleMatch.toLowerCase() === find.toLowerCase()
  )
}

function fuzzyMatch(drivers, testString) {
  return drivers.filter( possibleMatch =>
    possibleMatch.toLowerCase().indexOf(testString.toLowerCase())=== 0
    )
}


  
  function matchName(drivers, findName) {
    
  }