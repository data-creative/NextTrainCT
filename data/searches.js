"use strict";

const searches = [
  {"id":9996, "sort":1, "origin":"BNF", "destination":"NHV", "day":"thursday"},
  {"id":7274, "sort":2, "origin":"NHV", "destination":"BOS", "day":"thursday"},
  {"id":2345, "sort":3, "origin":"BNF", "destination":"NHV", "day":"today"},
  {"id":3454, "sort":4, "origin":"GLF", "destination":"OSB", "day":"tomorrow"},
  {"id":1123, "sort":5, "origin":"BNF", "destination":"MAD", "day":"2016-09-29"}
];

function abbrevSearchTitle(search){
  //console.log (typeof(search.origin), search.origin, typeof(search.destination), search.destination)
  return search.origin + " to " + search.destination
};

function searchTitle(search){
  return this.stationTitle(search.origin) + " to " + this.stationTitle(search.destination)
};

module.exports = {searches,
  abbrevSearchTitle,
  searchTitle
}
