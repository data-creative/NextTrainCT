import moment from 'moment';
import React, { Component } from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import {CardItem, Button, Icon} from 'native-base';
import DatePicker from 'react-native-datepicker';

import Station from "../../app/models/station";

export default class SwipeListRow extends Component {

  static get dateFormat(){return "YYYY-MM-DD"};

  constructor(props){
    super(props)
    this.state = {selectedDate: null} // expect selectedDate to be null to cause datepicker to display placeholder text
    this.navigator = this.props.navigator;
    this.routes = this.props.routes;
    this.route = this.props.route;
    this.originStation = Station.findByAbbrev(this.route.origin);
    this.destinationStation = Station.findByAbbrev(this.route.destination)
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  render(){
    let todaysDate = moment().format(SwipeListRow.dateFormat);
    let tomorrowsDate = moment().add(1, 'days').format(SwipeListRow.dateFormat);
    let datePickerMin = todaysDate;
    let datePickerMax = moment().add(3, 'months').format(SwipeListRow.dateFormat);

    return (
      <CardItem key={this.route.id} style={styles.cardItem}>
          <Text style={styles.cardItemTitle}>
            <Text style={{fontWeight:'bold'}}>{this.originStation.name.toUpperCase()}</Text>
            <Text style={{fontStyle:'italic', fontSize:12, color:'grey'}}>{"  to  "}</Text>
            <Text style={{fontWeight:'bold'}}>{this.destinationStation.name.toUpperCase()}</Text>
          </Text>

          <ScrollView horizontal style={styles.buttonList}>
            <Button transparent style={styles.button} onPress={function(){
                this.handleButtonPress(todaysDate)
              }.bind(this)}>
              <Text style={styles.buttonText}>today</Text>
            </Button>

            <Button transparent style={styles.button} onPress={function(){
                this.handleButtonPress(tomorrowsDate)
              }.bind(this)}>
              <Text style={styles.buttonText}>tomorrow</Text>
            </Button>

            <DatePicker
              style={styles.datePickerButton}
              date={this.state.selectedDate}
              mode="date"
              placeholder="future"
              showIcon={false}
              format={SwipeListRow.dateFormat}
              minDate={this.datePickerMin}
              maxDate={this.datePickerMax}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={datePickerCustomStyles}
              onDateChange={function(selectedDate){
                this.handleButtonPress(selectedDate)
              }.bind(this)}
            />
          </ScrollView>



      </CardItem>
    )
  }

  handleButtonPress(selectedDate){
    this.navigator.push({
      name: "TRAINS",
      params:{
        routes: this.routes,
        route: this.route,
        selectedDate: selectedDate
      }
    })
  }
}

const styles = StyleSheet.create({
  cardItem:{
    height:90,
    paddingLeft:20,
    backgroundColor:"white",
    marginBottom:15 // expect value to be the same as hiddenRow
  },
  cardItemTitle:{
    marginTop:10,
    marginBottom:3,
    fontSize:16
  },
  buttonList:{
    //alignSelf:'flex-end'
  },
  button:{
    //borderWidth:1, borderColor:'#ccc', borderStyle:'solid',
    //marginRight:10,
    height:30,
  },
  buttonText:{
    color: '#7a7a7a', //'#5067FF',
    //fontStyle:'italic'
    textDecorationLine:'underline'
  },
  datePickerButton:{
    width: 50,
    height: 30, // should match styles.button.height
    bottom: 5, // hack to acheive vertical alignment with other buttons
    left: 2
  }
});

const datePickerCustomStyles = {
  dateInput: {
    marginLeft: 0,
    borderWidth:0, // remove default border
  },
  placeholderText: {
    color: '#7a7a7a', // match buttonText
    textDecorationLine:'underline' // match buttonText
  },
}
