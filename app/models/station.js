"use strict";

const stations = [
  {"id":1, "abbrev":"BNF", "name":"Branford"},
  {"id":2, "abbrev":"NHV", "name":"New Haven Union"},
  {"id":3, "abbrev":"GCT", "name":"Grand Central"},
  {"id":4, "abbrev":"GLF", "name":"Guilford"},
  {"id":5, "abbrev":"BOS", "name":"Boston South"},
  {"id":6, "abbrev":"OSB", "name":"Old Saybrook"},
  {"id":7, "abbrev":"MAD", "name":"Madison"},
  {"id":8, "abbrev":"NHS", "name":"New Haven State"}
];

function findStationByAbbrev(stationAbbrev){
  var station = stations.find(function(station){ return station.abbrev == stationAbbrev})
  //console.log("FIND", stationAbbrev, station)
  return station
}

function stationTitleFull(stationAbbrev){
  var station = findStationByAbbrev(stationAbbrev)
  return station.name + " (" + station.abbrev + ")"
}

module.exports = {
  stations,
  findStationByAbbrev,
  stationTitleFull
}
