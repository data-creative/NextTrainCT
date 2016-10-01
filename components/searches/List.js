import React, {Component} from 'react';
import {List} from 'native-base';
import SearchesListItem from "./ListItem"

export default class SearchesList extends Component {
  render() {
    const searches = this.props.searches
    const navigator = this.props.navigator
    return (
      <List>
        {searches.map(function(search){
          return (
            <SearchesListItem key={search.id} search={search} searches={searches} navigator={navigator}/>
          )
        })}
      </List>
    );
  }
};
