import React, { Component } from 'react';
import {ListView} from 'react-native';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

import SwipeListRow from './SwipeListRow';
import SwipeListHiddenRow from './SwipeListHiddenRow';

export default class RoutesSwipeList extends Component {
  constructor(props){
    super(props)
    this.renderRow = this.renderRow.bind(this);
    this.renderHiddenRow = this.renderHiddenRow.bind(this);
  }

  render() {
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(this.props.routes)
    return (
        <SwipeListView
          dataSource={dataSource}
          renderRow={this.renderRow}
          renderHiddenRow={this.renderHiddenRow}
          leftOpenValue={75}
          rightOpenValue={-75}
        />
    )
  }

  renderRow(route){
    return <SwipeListRow route={route}/>
  }

  renderHiddenRow(route){
    return <SwipeListHiddenRow route={route}/>
  }
};
