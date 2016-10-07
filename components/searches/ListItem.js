import React, {Component} from 'react';
import {Text} from 'react-native'
import {ListItem, Button, Icon} from 'native-base';
import {searchTitleNames} from "../../data/searches"

export default class SearchesListItem extends Component {

  render() {
    const search = this.props.search;
    const searches = this.props.searches;
    const navigator = this.props.navigator;
    const goShow = this.goShow;

    return (
      <ListItem style={{height:85}}>
        <Button transparent onPress={function(){goShow(navigator, searches, search)}}>
          <Text style={{left:10}}>{ searchTitleNames(search) }</Text>
          <Icon name='md-arrow-forward' style={{left:5, top:10}}/>
        </Button>
      </ListItem>
    );
  }

  goShow(navigator, searches, search){
    navigator.push({name: 'SearchResults', passProps:{searches: searches, search: search}})
  }
};
