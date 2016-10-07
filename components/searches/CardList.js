import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Card, CardItem, Icon, Button, Thumbnail} from 'native-base';
import SearchesListItem from "./ListItem"
import {searchTitleNames} from "../../data/searches"

const styles = StyleSheet.create({
  cardItem:{
    //height:85
  },
  cardItemIcon:{
    //top:19,
    //left:5
  },
  cardItemTitle:{
    //left:5
  }
});

export default class SearchesList extends Component {
  render() {
    const goShow = this.goShow
    const searches = this.props.searches
    const navigator = this.props.navigator
    return (
      <Card>
        {searches.map(function(search){
          return (
            <CardItem key={search.id} style={styles.cardItem} onPress={function(){ goShow(navigator, searches, search)}}>
              <Icon name='md-search' style={styles.cardItemIcon}/>
              <Text style={styles.cardItemTitle}>{searchTitleNames(search)}</Text>
              <Text note>{search.day}</Text>
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
