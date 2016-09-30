import React, {Component} from 'react';
import {Text} from 'react-native'
import {ListItem} from 'native-base';

import stations from "../../data/stations"

export default class SearchesListItem extends Component {
  constructor(){
    super()
    this.searchTitle = this.searchTitle.bind(this)
    this.stationTitle = this.stationTitle.bind(this)
  }

  render() {
    var search = this.props.search;

    return (
      <ListItem>
        <Text>{ this.searchTitle(search) }</Text>
      </ListItem>
    );
  }

  searchTitle(search){
    return this.stationTitle(search.origin) + " to " + this.stationTitle(search.destination)
  }

  stationTitle(stationAbbrev){
    var station = stations.find(function(station){ return station.abbrev == stationAbbrev})
    console.log(stationAbbrev, station)
    return station.name + " (" + station.abbrev + ")"
  }
};
