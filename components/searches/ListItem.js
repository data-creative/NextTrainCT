import React, {Component} from 'react';
import {Text} from 'react-native'
import {ListItem, Card, CardItem, Icon} from 'native-base';

import {abbrevSearchTitle} from "../../data/searches"

export default class SearchesListItem extends Component {
  render() {
    var search = this.props.search;

    return (
      <ListItem>
          <Card>
            <CardItem style={{height:65}}>
                <Icon name='md-search' style={{left:5, top:10}}/>
                <Text style={{left:10}}>{ abbrevSearchTitle(search) }</Text>
                <Text>{ search.day }</Text>
                { /* <Icon name='md-arrow-forward' /> */ }
            </CardItem>
          </Card>
      </ListItem>
    );
  }
};
