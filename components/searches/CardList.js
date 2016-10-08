import React, {Component} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {Card, CardItem, Icon, Button, Thumbnail} from 'native-base';
import SearchesListItem from "./ListItem"
import {searchTitleNames} from "../../data/searches"

const styles = StyleSheet.create({
  cardItem:{
    height:115//,
    //padding:20
  },
  cardItemTitle:{
    marginTop:10,
    marginLeft:10,
    fontSize:16,
    fontWeight:'bold'
  },
  buttonList:{
    marginTop:15,
    //marginBottom:10,
    marginLeft:45
  },
  button:{
    borderWidth:1,
    borderColor:'#ccc',
    borderStyle:'solid',
    marginRight:10
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
                <Text style={styles.cardItemTitle}>{searchTitleNames(route)}</Text>
                <ScrollView horizontal style={styles.buttonList}>
                  <Button transparent style={styles.button} onPress={function(){ goShow(navigator, routes, route)}}>
                    <Text>today</Text>
                  </Button>
                  <Button transparent style={styles.button} onPress={function(){ goShow(navigator, routes, route)}}>
                    <Text>tomorrow</Text>
                  </Button>
                  <Button transparent style={styles.button} onPress={function(){ goShow(navigator, routes, route)}}>
                    <Text>other date</Text>
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
