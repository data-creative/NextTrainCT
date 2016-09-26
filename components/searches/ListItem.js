import React, {Component} from 'react';
import {Text} from 'react-native'
import {ListItem} from 'native-base';

export default class SearchesListItem extends Component {
  render() {
    var search = this.props.search;

    return (
      <ListItem>
        <Text>{"#" + search.id + " - " + search.title}</Text>
      </ListItem>
    );
  }
};
