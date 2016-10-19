import React, { Component } from 'react';
import {StyleSheet, Text, View, ListView} from 'react-native';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

export default class RoutesSwipeList extends Component {
  constructor(props){
    super(props)
    this.state = {routes: this.props.routes} // [{"id":3333, "origin":"GUIL", "destination":"OSB"},{},{}]
  }

  render() {
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(this.state.routes)

    const renderRow = function(route){
      return (
        <View style={styles.row}>
          <Text>{route.origin} to {route.destination}</Text>
        </View>
      )
    }

    const renderHiddenRow = function(route){
      const DeleteButton = <Text>Delete!</Text>
      return (
        <View style={styles.hiddenRow}>
          {DeleteButton}
          {DeleteButton}
        </View>
      )
    }

    return (
        <SwipeListView
          dataSource={dataSource}
          renderRow={ renderRow }
          renderHiddenRow={ renderHiddenRow }
          leftOpenValue={75}
          rightOpenValue={-75}
        />
    )
  }
}

const styles = StyleSheet.create({
	row: {
		alignItems: 'center',
		backgroundColor: '#CCC',
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		justifyContent: 'center',
		height: 50,
	},
	hiddenRow: {
		alignItems: 'center',
		backgroundColor: '#DDD',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 15,
	}
});
