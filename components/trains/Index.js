import moment from 'moment';
import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native'
import {Container, Header, Title, Content, Button, Icon, Footer, Spinner} from 'native-base';

import HeaderCard from "./HeaderCard"
import TrainsList from "./List"

//moment.updateLocale('en', {calendar : {sameDay : '[Today]', nextDay : '[Tomorrow]'}})

export default class TrainsIndex extends Component { // a.k.a SearchResultsPage

  constructor(props){
    super(props)
    this.searchResults = {
      schedule:{publishedOn:"2016-01-01", publishedBy:"Shore Line East"},
      trains:[
        {id:1, departure: moment().subtract(90, "minutes").format(), arrival: moment().subtract(75, "minutes").format() },
        {id:2, departure: moment().subtract(20, "minutes").format(), arrival: moment().subtract(5, "minutes").format() },
        {id:3, departure: moment().format(), arrival: moment().add(15, "minutes").format() },
        {id:4, departure: moment().add(45, "seconds").format(), arrival: moment().add(16, "minutes").format() },
        {id:5, departure: moment().add(90, "seconds").format(), arrival: moment().add(18, "minutes").format() },
        {id:6, departure: moment().add(5, "minutes").format(), arrival: moment().add(20, "minutes").format() },
        {id:7, departure: moment().add(75, "minutes").format(), arrival: moment().add(90, "minutes").format() },
        {id:8,departure: moment().add(125, "minutes").format(), arrival: moment().add(140, "minutes").format()}
      ]
    }
    this.state = {
      displaySpinner:true,
      trains:[]
    }
    this.fav = this.props.fav;
    this.selectedDate = this.props.selectedDate;
    this.navigator = this.props.navigator;
    this.goBack = this.goBack.bind(this);
  }

  render() {
    const waitingMessage = "Crunching train schedule data..."
    const waitingText = <Text style={{textAlign: 'center'}}>{waitingMessage}</Text>

    return (
      <Container>
        <Header>
          <Button transparent onPress={this.goBack}>
            <Icon name="md-arrow-back" />
          </Button>
          <Title>Train Schedule ({this.fav.origin.toUpperCase()} to {this.fav.destination.toUpperCase()})</Title>
        </Header>

        <Content style={{margin:20}}>
          { this.state.trains.length > 0 ? <TrainsList trains={this.searchResults.trains}/> : waitingText }
          { this.state.displaySpinner ? <Spinner color="#428bca" size="large"/> : null }
        </Content>

        {/*
          <Footer transparent style={styles.footer}>
            <Text style={styles.footerText}>
              <Text>Schedule published by </Text>
              <Text>
                {this.searchResults.schedule.publishedBy}
              </Text>
              <Text> on </Text>
              <Text>
                {moment(this.searchResults.schedule.publishedOn).format("MMMM D, YYYY")}
              </Text>
              <Text>.</Text>
            </Text>
          </Footer>
          */}

      </Container>
    );
  }

  goBack(){
    this.navigator.pop();
  }

  fetchTrainSchedule(){
    var requestURL = "http://next-train-production.herokuapp.com/api/v0/trains.json?origin=BRN&destination=NHV&date=2016-12-01"

    fetch(requestURL)
      .then(function(response) {
        //console.log("RAW RESPONSE", "STATUS", response.status, response.statusText, response.ok, "HEADERS", response.headers, response.url)
        return response.json()
      })
      .then(function(json){
        console.log("PARSED RESPONSE BODY", json)
        console.lot("TODO: SET STATES")
        //this.navigator.push({
        //  name: "TRAINS",
        //  params:{
        //    favs: this.favs,
        //    fav: this.fav,
        //    selectedDate: selectedDate,
        //    searchResults: json
        //  }
        //})
      }.bind(this))
      .catch(function(err){
        // var flash = {danger: ["There was an issue fetching schedule results from the server. Please try again or contact the developer."]}
        console.error(err)
      })
  }

};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'transparent',
    height:75,
    paddingLeft:20,
    //alignItems:'flex-start'
  },
  footerText:{
    fontSize:12,
    color: '#7a7a7a', //'#5067FF',
    alignSelf:'flex-start'
  }
});
