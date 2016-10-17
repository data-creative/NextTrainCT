import moment from 'moment';
import React, { Component } from 'react';
import {Text} from 'react-native';
import {Card, CardItem} from 'native-base';

import Station from "../../app/models/station"

export default class RouteHeaderCard extends Component {
  static get dateDisplayFormat(){ return "dddd, MMMM D, YYYY" } // MONDAY, OCTOBER 17, 2016

  constructor(props){
    super(props)
    this.selectedRoute = this.props.route;
    this.selectedDate = this.props.date;
  }

  render(){
    return (
      <Card>
        <CardItem>
          <Text>
            <Text style={{fontWeight:'bold'}}>
              { Station.findByAbbrev(this.selectedRoute.origin).name.toUpperCase() }
            </Text>
            <Text style={{fontStyle:'italic', fontSize:12, color:'grey'}}>
              {"  to  "}
            </Text>
            <Text style={{fontWeight:'bold'}}>
              { Station.findByAbbrev(this.selectedRoute.destination).name.toUpperCase() }
            </Text>
          </Text>

          <Text style={{fontWeight:'bold', fontSize:14}}>
            { moment(this.selectedDate).format(RouteHeaderCard.dateDisplayFormat).toUpperCase() }
          </Text>
        </CardItem>
      </Card>
    )
  }
}
