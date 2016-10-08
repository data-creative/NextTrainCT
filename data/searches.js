"use strict";

import {stationTitle, findStationByAbbrev} from "./stations"

const searches = [
  {"id":1111, "origin":"BNF", "destination":"NHV", "day":"today"},
  {"id":2222, "origin":"BNF", "destination":"NHV", "day":"today"},
  {"id":3333, "origin":"GLF", "destination":"OSB", "day":"tomorrow"},
  {"id":4444, "origin":"BNF", "destination":"NHV", "day":"thursdays"},
  {"id":5555, "origin":"NHV", "destination":"BOS", "day":"thursdays"},
  {"id":6666, "origin":"BNF", "destination":"MAD", "day":"2016-09-29"},
  {"id":7777, "origin":"BNF", "destination":"GLF", "day":"2016-09-29"},
  {"id":8888, "origin":"NHV", "destination":"GCT", "day":"tomorrow"}
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
