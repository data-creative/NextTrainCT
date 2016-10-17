import moment from 'moment';
import React, {Component} from 'react';
import {Text} from 'react-native'
import {List, ListItem, Icon, Badge, Card, CardItem} from 'native-base';

import Train from "../../app/models/train"

export default class TrainsList extends Component {
  constructor(props){
    super(props)
    this.trains = this.props.trains.map(function(train){ return new Train(train) });
  }

  render() {
    return (
      <List>
        {
          this.trains.map(function(train){
            const upcomingTrainBadge = <Badge primary>{train.departureDisplayTimeFromNow()}</Badge>
            return (
              <ListItem iconLeft key={train.id} style={{height:60}}>
                  <Icon name='md-train' style={{marginRight:10, color:'#282828'}}/>
                  <Text style={{fontSize:16, top:3}}>{train.departureDisplayTime() + " to " + train.arrivalDisplayTime()}</Text>
                  {train.isUpcoming() ? upcomingTrainBadge : <Text/>}
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
