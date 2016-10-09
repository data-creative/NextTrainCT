import React, {Component} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {Card, CardItem, Icon, Button, Thumbnail} from 'native-base';
import SearchesListItem from "./ListItem"
import {findStationByAbbrev} from "../../data/stations"

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
    alignSelf:'flex-end'
  },
  button:{
    //borderWidth:1, borderColor:'#ccc', borderStyle:'solid',
    //marginRight:10,
    height:30,
  },
  buttonText:{
    color:'#5067FF',
    //fontStyle:'italic'
    textDecorationLine:'underline'
  }
});

export default class SearchesList extends Component {
  render() {
    const goShow = this.goShow
    const routes = this.props.searches
    const navigator = this.props.navigator
    return (
      <Card>
        {routes.map(function(route){
          return (
            <CardItem key={route.id} style={styles.cardItem}>
                <Text style={styles.cardItemTitle}>
                  <Text style={{fontWeight:'bold'}}>
                    { findStationByAbbrev(route.origin).name.toUpperCase() }
                  </Text>
                  <Text style={{fontStyle:'italic', fontSize:12, color:'grey'}}>
                    {"  to  "}
                  </Text>
                  <Text style={{fontWeight:'bold'}}>
                    { findStationByAbbrev(route.destination).name.toUpperCase() }
                  </Text>
                </Text>


                <ScrollView horizontal style={styles.buttonList}>

                  <Button transparent style={styles.button} onPress={function(){ goShow(navigator, routes, route)}}>
                    <Text style={styles.buttonText}>today</Text>
                  </Button>

                  <Button transparent style={styles.button} onPress={function(){ goShow(navigator, routes, route)}}>
                    <Text style={styles.buttonText}>tomorrow</Text>
                  </Button>

                  <Button transparent style={styles.button} onPress={function(){ goShow(navigator, routes, route)}}>
                    <Text style={styles.buttonText}>future</Text>
                  </Button>



                </ScrollView>
            </CardItem>
          )
        })}
      </Card>
    );
  }



  goShow(navigator, searches, search){
    navigator.push({name: 'SearchResults', params:{searches: searches, search: search}})
  }
};
