import React, { Component } from 'react';
import {StyleSheet, Text, View, ListView} from 'react-native';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

export default class RoutesSwipeList extends Component {

  constructor(props){
    super(props)
    this.state = {routes: this.props.routes} //=> {"id":3333, "origin":"GUIL", "destination":"OSB"}
  }

  render() {
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(this.state.routes)

    return (
        <SwipeListView dataSource={dataSource}
            renderRow={ data => (
                <View style={styles.rowFront}>
                    <Text>{data.origin} to {data.destination}</Text>
                </View>
            )}
            renderHiddenRow={ data => (
                <View style={styles.rowBack}>
                    <Text>Left</Text>

                    <Text>Right</Text>
                </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
        />
    )
  }
}

const styles = StyleSheet.create({
	rowFront: {
		alignItems: 'center',
		backgroundColor: '#CCC',
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		justifyContent: 'center',
		height: 50,
	},
	rowBack: {
		alignItems: 'center',
		backgroundColor: '#DDD',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 15,
	}
});
