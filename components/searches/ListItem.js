import React, {Component} from 'react';
import {Text} from 'react-native'
import {ListItem, Button, Icon} from 'native-base';
import {searchTitleNames} from "../../app/models/route"

export default class SearchesListItem extends Component {

  render() {
    const search = this.props.search;
    const searches = this.props.searches;
    const navigator = this.props.navigator;
    const goShow = this.goShow;
    const arrowIcon = <Icon name='md-arrow-forward' style={{left:5, top:10}}/>

    return (
      <ListItem iconRight style={{height:85}}>
        <Button transparent onPress={function(){goShow(navigator, searches, search)}}>
          <Text style={{left:10, fontSize:56}}>{ searchTitleNames(search) }</Text>
          {arrowIcon}
        </Button>
      </ListItem>
    );
  }

  goShow(navigator, searches, search){
    navigator.push({name: 'SearchResults', params:{searches: searches, search: search}})
  }
};
