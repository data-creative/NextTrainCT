import moment from 'moment';
import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native'
import {Container, Header, Title, Content, Button, Icon, List, ListItem, Footer, Badge, Card, CardItem} from 'native-base';

import Station from "../../app/models/station"
import Train from "../../app/models/train"
import RouteHeaderCard from "./HeaderCard"

//moment.updateLocale('en', {calendar : {sameDay : '[Today]', nextDay : '[Tomorrow]'}})

export default class TrainsIndex extends Component { // a.k.a SearchResultsPage

  constructor(props){
    super(props)
    this.state = {
      searchResults: {
        schedule:{publishedOn:"2016-01-01", publishedBy:"Shoreline East"},
        trains:[
          {
            id:1,
            departure: moment().subtract(90, "minutes").format(),
            arrival: moment().subtract(75, "minutes").format(),
          },
          {
            id:2,
            departure: moment().subtract(20, "minutes").format(),
            arrival: moment().subtract(5, "minutes").format(),
          },
          {
            id:3,
            departure: moment().format(),
            arrival: moment().add(15, "minutes").format(),
          },
          {
            id:3,
            departure: moment().add(45, "seconds").format(),
            arrival: moment().add(16, "minutes").format(),
          },
          {
            id:4,
            departure: moment().add(90, "seconds").format(),
            arrival: moment().add(18, "minutes").format(),
          },
          {
            id:5,
            departure: moment().add(5, "minutes").format(),
            arrival: moment().add(20, "minutes").format(),
          },
          {
            id:6,
            departure: moment().add(75, "minutes").format(),
            arrival: moment().add(90, "minutes").format(),
          },
          {
            id:7,
            departure: moment().add(125, "minutes").format(),
            arrival: moment().add(140, "minutes").format(),
          },
        ].map(function(train){ return new Train(train) })
      }
    }
    this.selectedRoute = this.props.route;
    this.selectedDate = this.props.selectedDate;
    this.navigator = this.props.navigator;
    this.goBack = this.goBack.bind(this);
  }

  render() {

    return (
      <Container>
        <Header>
          <Button transparent onPress={this.goBack}>
            <Icon name="md-arrow-back" />
          </Button>
          <Title>Trains</Title>
        </Header>

        <Content style={{margin:20}}>

          <RouteHeaderCard route={this.selectedRoute} date={this.selectedDate}/>

          <List>
            { this.state.searchResults.trains.map(function(train){

              const upcomingTrainBadge = <Badge primary>{train.departureDisplayTimeFromNow()}</Badge>

              return (

                <ListItem iconLeft key={train.id} style={{height:60}}>
                    <Icon name='md-train' style={{marginRight:10, color:'#282828'}}/>
                    <Text style={{fontSize:16, top:3}}>{train.departureDisplayTime() + " to " + train.arrivalDisplayTime()}</Text>
                    {train.isUpcoming() ? upcomingTrainBadge : <Text/>}
                </ListItem>

              )
            })}
          </List>
        </Content>

        <Footer transparent style={styles.footer}>
          <Text style={styles.footerText}>
            <Text>Schedule published by </Text>
            <Text style={{fontStyle:'italic'}}>
              {this.state.searchResults.schedule.publishedBy}
            </Text>
            <Text> on </Text>
            <Text style={{fontStyle:'italic'}}>
              {moment(this.state.searchResults.schedule.publishedOn).format("MMMM D, YYYY")}
            </Text>
            <Text>.</Text>
          </Text>
        </Footer>
      </Container>
    );
  }

  goBack(){
    this.navigator.pop();
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
