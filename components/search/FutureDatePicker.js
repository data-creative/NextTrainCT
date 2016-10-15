import React, { Component } from 'react';
import {View, Text} from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class FutureDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {
      date: "2017-01-01"
    }
  }

  render(){
    return (
      <View>

        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="date"
          //placeholder="future date"
          showIcon={false}
          format="YYYY-MM-DD"
          minDate="2016-10-01"
          //maxDate="2020-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={datePickerStyles}
          onDateChange={(date) => {this.setState({date: date})}}
        />

        <Text>Selected date: {this.state.date}</Text>
      </View>
    )
  }
}

const datePickerStyles = {
  dateIcon: {
    position: 'absolute',
    left: 0,
    top: 4,
    marginLeft: 0
  },
  dateInput: {
    marginLeft: 36
  }
}
