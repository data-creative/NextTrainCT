import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class SwipeListRowHidden extends Component {
  render(){
    const DeleteButton = <Text>Delete!</Text>

    return (
      <View style={styles.hiddenRow}>
        {DeleteButton}
        {DeleteButton}
      </View>
    )
  }
}

const styles = StyleSheet.create({
	hiddenRow: {
		alignItems: 'center',
		backgroundColor: '#DDD',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 15,
	}
});
