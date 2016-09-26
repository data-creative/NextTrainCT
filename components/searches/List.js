import React, {Component} from 'react';
import {Text} from 'react-native'
import {List, ListItem} from 'native-base';

import SearchesListItem from "./ListItem"

export default class SearchesList extends Component {
  render() {
    var searches = this.props.searches;

    return (
      <List>
        <ListItem key="list-header" itemDivider>
          <Text>SEARCHES ({searches.length})</Text>
        </ListItem>

        {searches.map(function(search){
          return (
            <SearchesListItem key={search.id} search={search}/>
          )
        })}
      </List>
    );
  }
};
