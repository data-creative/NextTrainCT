import React, { Component } from 'react';
import {ListView} from 'react-native';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

import SwipeListRow from './SwipeListRow';
import SwipeListHiddenRow from './SwipeListHiddenRow';

export default class SwipeList extends Component {
  constructor(props){
    super(props)
    this.navigator = this.props.navigator;
    this.favs = this.props.favs;
    this.renderRow = this.renderRow.bind(this);
    this.renderHiddenRow = this.renderHiddenRow.bind(this);
    this.rowHasChanged = this.rowHasChanged.bind(this);
    this.dataSource = new ListView.DataSource({rowHasChanged: this.rowHasChanged})
  }

  render() {
    return (
        <SwipeListView
          dataSource={this.dataSource.cloneWithRows(this.favs)}
          renderRow={this.renderRow}
          renderHiddenRow={this.renderHiddenRow}
          leftOpenValue={60}
          rightOpenValue={-60}
        />
    )
  }

  renderRow(fav, sectionId, rowId){
    return <SwipeListRow fav={fav} navigator={this.navigator}/>
  }

  renderHiddenRow(fav, sectionId, rowId){
    return <SwipeListHiddenRow fav={fav} favs={this.favs} navigator={this.navigator}/>
  }

  rowHasChanged(row1, row2){
    return row1 !== row2
  }
};
