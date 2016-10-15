import React, {Component} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {Card, CardItem, Icon, Button, Thumbnail} from 'native-base';
import DatePicker from 'react-native-datepicker';
import Station from "../../app/models/station"

export default class RoutesList extends Component {
  constructor(props){
    super(props)
    //this.goTrains = this.goTrains.bind(this)
    this.state = {
      date: null // set as null to use the placeholder text
    }
  }

  render() {
    const goShow = this.goShow
    const routes = this.props.routes
    const navigator = this.props.navigator
    const handleButtonPress = this.handleButtonPress
    const selectedDate = this.state.date
    const handleDateSelection = this.handleDateSelection

    return (
      <Card>

        {routes.map(function(route){
          return (
            <CardItem key={route.id} style={styles.cardItem}>

                { /* ROUTE TITLE */ }

                <Text style={styles.cardItemTitle}>
                  <Text style={{fontWeight:'bold'}}>
                    {
                      Station.findByAbbrev(route.origin).name.toUpperCase()
                    }
                  </Text>
                  <Text style={{fontStyle:'italic', fontSize:12, color:'grey'}}>
                    {"  to  "}
                  </Text>
                  <Text style={{fontWeight:'bold'}}>
                    {
                      Station.findByAbbrev(route.destination).name.toUpperCase()
                    }
                  </Text>
                </Text>

                { /* BUTTON LIST */ }

                <ScrollView horizontal style={styles.buttonList}>

                  <Button transparent style={styles.button} onPress={function(){ handleButtonPress(navigator, routes, route, "TODAY")}}>
                    <Text style={styles.buttonText}>
                      {"today"}
                    </Text>
                  </Button>

                  <Button transparent style={styles.button} onPress={function(){ handleButtonPress(navigator, routes, route, "TOMORROW")}}>
                    <Text style={styles.buttonText}>
                      {"tomorrow"}
                    </Text>
                  </Button>

                  {/* <Button transparent style={styles.button} onPress={function(){ handleButtonPress(navigator, routes, route, "FUTURE")}}>
                    <Text style={styles.buttonText}>
                      {"future"}
                    </Text>
                  </Button>*/}

                  <DatePicker
                    style={styles.datePickerButton}
                    date={selectedDate}
                    mode="date"
                    placeholder="future"
                    showIcon={false}
                    format="YYYY-MM-DD"
                    minDate="2016-10-01"
                    //maxDate="2020-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={datePickerCustomStyles}
                    onDateChange={function(date){ handleButtonPress(navigator, routes, route, date)}}
                  />

                </ScrollView>
            </CardItem>
          )
        })}
      </Card>
    );
  }

  handleButtonPress(navigator, routes, route, dateSearchParam){
    navigator.push({
      name: "TRAINS",
      params:{
        routes: routes,
        route: route,
        dateSearchParam: dateSearchParam
      }
    })
  }

};

const styles = StyleSheet.create({
  cardItem:{
    height:90,
    paddingLeft:20
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
    left: 3
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
