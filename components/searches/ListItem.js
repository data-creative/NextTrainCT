import React, {Component} from 'react';
import {Text} from 'react-native'
import {ListItem, Button, Icon} from 'native-base';

import {abbrevSearchTitle} from "../../data/searches"

export default class SearchesListItem extends Component {
  render() {
    const search = this.props.search;
    const searches = this.props.searches;
    const navigator = this.props.navigator
    const visitResultsPage = this.visitResultsPage;
    return (
      <ListItem style={{height:85}}>
        <Button transparent onPress={function(){visitResultsPage(navigator, searches, search)}}>
          <Icon name='md-search' style={{left:5, top:10}}/>
          <Text style={{left:10}}>{ abbrevSearchTitle(search) }</Text>
          <Text>{ search.day }</Text>
          <Icon name='md-arrow-forward' style={{left:5, top:10}}/>
        </Button>
      </ListItem>
    );
  }

  visitResultsPage(navigator, searches, search){
    console.log("VISIT RESULTS PAGE", search)
    navigator.push({
      name: 'SearchResults',
      passProps:{
        searches: searches, // pass this to the show page so the show page can pass them back to the index page
        search: search,
      }
    })
  }
};
