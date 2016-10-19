import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class SwipeListRow extends Component {
  render(){
    return (

      <View style={styles.row}>
        <Text>{this.props.route.origin} to {this.props.route.destination}</Text>
      </View>

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
	}
});
