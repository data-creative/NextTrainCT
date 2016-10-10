"use strict";

var stations = require('../../data/stations.json');

function findStationByAbbrev(stationAbbrev){
  var station = stations.find(function(station){ return station.abbrev == stationAbbrev})
  if (typeof(station) == "undefined"){
    console.error("UNABLE TO FIND STATION -- " + stationAbbrev)
  } // else { console.log("FIND", stationAbbrev, station) }
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
