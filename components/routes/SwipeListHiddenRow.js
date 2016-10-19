import React, { Component } from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Button, Icon} from 'native-base';

export default class SwipeListRowHidden extends Component {
  constructor(props){
    super(props)
    this.handleDeleteButtonPress = this.handleDeleteButtonPress.bind(this);
  }

  render(){
    const DeleteButton = (
      <Button danger onPress={this.handleDeleteButtonPress}>
        <Icon name="md-trash" />
      </Button>
    )

    return (
      <View style={styles.hiddenRow}>
        {DeleteButton}
        {DeleteButton}
      </View>
    )
  }

  handleDeleteButtonPress(){
    console.log("DELETE BUTTON PRESSED")

    Alert.alert(
      "Remove from favorites?",
      "Are you sure you want to remove this route from your favorites list?",
      [
        {text: 'Cancel', onPress: function(){  console.log("DELETE NEVERMIND")  }},
        {text: 'OK', onPress: function(){  console.log("DELETE OK")  }},
      ]
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
