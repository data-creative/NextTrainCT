"use strict";

import {stationTitle, findStationByAbbrev} from "./stations"

const searches = [
  {"id":9996, "sort":1, "origin":"BNF", "destination":"NHV", "day":"thursday"},
  {"id":7274, "sort":2, "origin":"NHV", "destination":"BOS", "day":"thursday"},
  {"id":2345, "sort":3, "origin":"BNF", "destination":"NHV", "day":"today"},
  {"id":3454, "sort":4, "origin":"GLF", "destination":"OSB", "day":"tomorrow"},
  {"id":1123, "sort":5, "origin":"BNF", "destination":"MAD", "day":"2016-09-29"}
];

function searchTitleAbbrevs(search){
  return search.origin + " to " + search.destination
};

function searchTitleFull(search){
  return stationTitle(search.origin) + " to " + stationTitle(search.destination)
};

function searchTitleNames(search){
  return originStation(search).name + " to " + destinationStation(search).name
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
