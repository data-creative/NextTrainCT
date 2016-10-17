import React, { Component } from 'react';
import {StyleSheet, Text, View, ListView} from 'react-native';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

export default class RoutesSwipeList extends Component {

  constructor(props){
    super(props)
    this.dataSource = Array(20).fill('').map((_,i)=>`item #${i}`) // this.props.routes
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return (
        <SwipeListView
            dataSource={ds.cloneWithRows(this.dataSource)}
            renderRow={ data => (
                <View style={styles.rowFront}>
                    <Text>I am {data} in a SwipeListView</Text>
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
	container: {
		backgroundColor: 'white',
		flex: 1
	},
	standalone: {
		marginTop: 30,
		marginBottom: 30,
	},
	standaloneRowFront: {
		alignItems: 'center',
		backgroundColor: '#CCC',
		justifyContent: 'center',
		height: 50,
	},
	standaloneRowBack: {
		alignItems: 'center',
		backgroundColor: '#8BC645',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 15
	},
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
