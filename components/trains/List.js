import moment from 'moment';
import React, {Component} from 'react';
import {Text} from 'react-native'
import {List, ListItem, Icon, Badge, Card, CardItem} from 'native-base';

import Train from "../../app/models/train"

export default class TrainsList extends Component {
  static get dateFormat(){ return "dddd, MMMM D, YYYY" } // MONDAY, OCTOBER 17, 2016

  constructor(props){
    super(props)
    this.selectedDate = this.props.selectedDate
    this.transitRoute = this.props.transitRoute
    this.trains = this.props.trains.map(function(train){
      return new Train({id: train.id, departure: train.origin_departure, arrival: train.destination_arrival})
    });
  }

  render() {
    return (
      <List>
        <ListItem>
          <Text style={{fontSize:18}}>
            { moment(this.selectedDate).format(TrainsList.dateFormat) }
          </Text>
        </ListItem>
        {
          this.trains.map(function(train){
            const upcomingBadge = <Badge warning>{train.departureDisplayTimeFromNow()}</Badge>

            return (
              <ListItem iconLeft key={train.id} style={{height:60}}>
                  <Icon name='md-train' style={{marginRight:13, color:'#282828'}}/>
                  <Text style={{fontSize:18}}>{train.departureDisplayTime() + " to " + train.arrivalDisplayTime()}</Text>
                  {train.isUpcoming() ? upcomingBadge : <Text/>}
              </ListItem>
            )
          })
        }
      </List>
    );
  }

  goBack(){
    this.navigator.pop();
  }

};
