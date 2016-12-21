import moment from 'moment';
import React, { Component } from 'react';
import {Text} from 'react-native';
import {Card, CardItem} from 'native-base';

import Station from "../../app/models/station"

export default class HeaderCard extends Component {
  static get dateDisplayFormat(){ return "dddd, MMMM D, YYYY" } // MONDAY, OCTOBER 17, 2016

  constructor(props){
    super(props)
    this.fav = this.props.fav;
    this.selectedDate = this.props.date;
  }

  render(){
    return (
      <Card>
        <CardItem>

          { /*
            <Text>
              <Text style={{fontWeight:'bold'}}>
                { Station.findByAbbrev(this.fav.origin).name.toUpperCase() }
              </Text>
              <Text style={{fontStyle:'italic', fontSize:12, color:'grey'}}>
                {"  to  "}
              </Text>
              <Text style={{fontWeight:'bold'}}>
                { Station.findByAbbrev(this.fav.destination).name.toUpperCase() }
              </Text>
            </Text>

            */}

          <Text>
            <Text style={{fontStyle:'italic', fontSize:12, color:'grey'}}>
              {"departing: "}
            </Text>
            <Text style={{fontWeight:'bold', fontSize:14}}>
              { moment(this.selectedDate).format(HeaderCard.dateDisplayFormat).toUpperCase() }
            </Text>
          </Text>

        </CardItem>
      </Card>
    )
  }
}
