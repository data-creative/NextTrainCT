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
    this.rowHasChanged = this.rowHasChanged.bind(this);
    this.dataSource = new ListView.DataSource({rowHasChanged: this.rowHasChanged}).cloneWithRows(this.props.routes)
  }

  render() {
    return (
        <SwipeListView
          dataSource={this.dataSource}
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

  rowHasChanged(row1, row2){
    return row1 !== row2
  }
};
