"use strict";

import {stationTitle, findStationByAbbrev} from "./route"

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
  searchTitleAbbrevs,
  searchTitleNames,
  searchTitleFull
}
