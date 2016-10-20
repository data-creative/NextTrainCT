import React, { Component } from 'react';
import {ListView} from 'react-native';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

import SwipeListRow from './SwipeListRow';
import SwipeListHiddenRow from './SwipeListHiddenRow';

export default class RoutesSwipeList extends Component {
  constructor(props){
    super(props)
    this.navigator = this.props.navigator;
    this.routes = this.props.routes;
    this.renderRow = this.renderRow.bind(this);
    this.renderHiddenRow = this.renderHiddenRow.bind(this);
    this.rowHasChanged = this.rowHasChanged.bind(this);
    this.dataSource = new ListView.DataSource({rowHasChanged: this.rowHasChanged})
  }

  render() {
    return (
        <SwipeListView
          dataSource={this.dataSource.cloneWithRows(this.props.routes)}
          renderRow={this.renderRow}
          renderHiddenRow={this.renderHiddenRow}
          leftOpenValue={60}
          rightOpenValue={-60}
        />
    )
  }

  renderRow(route, sectionId, rowId){
    //console.log(route,sectionId, rowId)
    return <SwipeListRow route={route} navigator={this.navigator}/>
  }

  renderHiddenRow(route, sectionId, rowId){
    return <SwipeListHiddenRow route={route} routes={this.routes} navigator={this.navigator}/>
  }

  rowHasChanged(row1, row2){
    return row1 !== row2
  }
};
