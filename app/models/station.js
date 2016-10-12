"use strict";

var stations = require('../../data/stations.json');

export default class Station {
  constructor(props) {
    this.id = props.id;
    this.abbrev = props.abbrev;
    this.name = props.name;
    this.latitude = props.latitude;
    this.longitude = props.longitude;
    this.url = props.url;
  }

  static all(){
    return stations.map(function(station){
      return new Station(station)
    });
  }

  static findByAbbrev(abbrev){
    var station = Station.all().find(function(station){ return station.abbrev == abbrev} )
    if (typeof(station) == "undefined"){ console.error("UNABLE TO FIND STATION -- " + abbrev); }
    return station
  }
};
