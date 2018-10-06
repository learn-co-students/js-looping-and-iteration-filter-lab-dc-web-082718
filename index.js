function findMatching(drivers, name) {
  return drivers.filter(
    function (d) {return d.toLowerCase() == name.toLowerCase();}
  );
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(
    function (d) {return d.slice(0,letters.length) == letters}
  );
}

function matchName(drivers, name) {
  return drivers.filter(
    function(d) {return(d['name'] == name) } );
}
