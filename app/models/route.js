"use strict";

import {stationTitle, findStationByAbbrev} from "./route"

const searches = [
  {"id":1111, "origin":"BNF", "destination":"NHV"},
  {"id":2222, "origin":"NHV", "destination":"BNF"},
  {"id":3333, "origin":"GLF", "destination":"OSB"}
];

function searchTitleAbbrevs(search){
  return search.origin + " to " + search.destination
};

function searchTitleFull(search){
  return stationTitle(search.origin) + " to " + stationTitle(search.destination)
};

function searchTitleNames(search){
  return originStation(search).name.toUpperCase() + " to " + destinationStation(search).name.toUpperCase()
};

function originStation(search){
  return findStationByAbbrev(search.origin)
}

function destinationStation(search){
  return findStationByAbbrev(search.destination)
}

module.exports = {
  searches,
  searchTitleAbbrevs,
  searchTitleNames,
  searchTitleFull
}
