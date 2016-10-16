import moment from 'moment';
import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native'
import {Container, Header, Title, Content, Button, Icon, List, ListItem, Footer} from 'native-base';

import Station from "../../app/models/station"

//moment.updateLocale('en', {calendar : {sameDay : '[Today]', nextDay : '[Tomorrow]'}})

export default class TrainsIndex extends Component { // a.k.a SearchResultsPage
  constructor(props){
    super(props)
    this.state = {
      searchResults: {
        responseAt:"8:11am",
        schedule:{
          publishedOn:"2016-01-01",
          publishedBy:"Shoreline East"
        },
        trains:[
          {id:1, departure: "10:30am", arrival:"10:45am"},
          {id:2, departure: "11:23am", arrival:"11:38am"},
          {id:3, departure: "1:15pm", arrival:"1:30pm"},
          {id:4, departure: "5:45pm", arrival:"6:00pm"}
        ]
      }
    }
  }

  render() {
    const route = this.props.route;
    const routes = this.props.routes;
    const selectedDate = this.props.selectedDate;
    //console.log(selectedDate, typeof(selectedDate));
    const navigator = this.props.navigator;
    const goBack = this.goBack;
    const isUpcoming = this.isUpcoming;

    return (
      <Container>
        <Header>
          <Button transparent onPress={function(){ goBack(navigator) }}>
            <Icon name="md-arrow-back" />
          </Button>
          <Title>{"Trains" }</Title>
        </Header>

        <Content style={{margin:20}}>
          <Text style={{marginTop:10, fontSize:16, marginBottom:5 /* textAlign:'center' */}}>
            {/*<Text style={{fontStyle:'italic', fontSize:12, color:'grey'}}>
              {"from  "}
            </Text>*/}
            <Text style={{fontWeight:'bold'}}>
              { Station.findByAbbrev(route.origin).name.toUpperCase() }
            </Text>
            <Text style={{fontStyle:'italic', fontSize:12, color:'grey'}}>
              {"  to  "}
            </Text>
            <Text style={{fontWeight:'bold'}}>
              { Station.findByAbbrev(route.destination).name.toUpperCase() }
            </Text>
          </Text>
          <Text style={{marginBottom:10, textAlign:'left'}}>
            <Text style={{fontStyle:'italic', fontSize:12}}>
              {"departing  "}
            </Text>
            <Text style={{fontWeight:'bold', fontSize:16}}>
              { moment(selectedDate).format("dddd, MMMM D").toUpperCase() }
            </Text>
          </Text>

          <List>
            { this.state.searchResults.trains.map(function(train){
              const upcomingTrainBadge = <Text>departs in 5 mins</Text>
              return (
                <ListItem iconLeft key={train.id} style={{height:60}}>
                    <Icon name='md-train' style={{marginRight:10, color:'#282828'}}/>
                    <Text>{train.departure + " to " + train.arrival}</Text>
                    {isUpcoming(train) ? upcomingTrainBadge : <Text/>}
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

  goBack(navigator){
    navigator.pop();
  }

  isUpcoming(train){
    return true // todo
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
