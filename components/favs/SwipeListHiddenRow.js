import React, { Component } from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Button, Icon} from 'native-base';

export default class SwipeListHiddenRow extends Component {
  constructor(props){
    super(props)
    this.navigator = this.props.navigator;
    this.favs = this.props.favs;
    this.fav = this.props.fav;
    this.handleDeleteButtonPress = this.handleDeleteButtonPress.bind(this);
    this.removeFav = this.removeFav.bind(this);
  }

  render(){
    const DeleteButton = (
      <Button transparent onPress={this.handleDeleteButtonPress} style={styles.deleteButton}>
        <Icon name="md-trash" style={{color: "white"}}/>
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
    //let alertTitle = "Remove from favorites?";
    //let alertMessage = "Are you sure you want to remove this route from your favorites list?";
    //let configAlertButtons = [
    //  {
    //    text: 'Cancel',
    //    onPress: function(){
    //      console.log("DELETE NEVERMIND")
    //    }
    //  },
    //  {
    //    text: 'OK',
    //    onPress: function(){ this.removeFav() }.bind(this)
    //  },
    //]
    //Alert.alert(alertTitle, alertMessage, configAlertButtons)
    this.removeFav()
  }

  removeFav(){
    const fav = this.fav;
    const favs = this.favs;
    delete favs[favs.indexOf(fav)];

    this.navigator.replace({
      name: 'FAVS',
      params:{favs: this.favs}
    })
  }
}

const styles = StyleSheet.create({
  hiddenRow: {
    alignItems: 'center',
    backgroundColor: '#d9534f', // danger
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight:15,
    marginBottom:15 // expect to match value from non-hidden row
  },
  deleteButton:{
    alignSelf:'center'
  }
})
