import React, { Component } from 'react';
import {StyleSheet, View, AsyncStorage} from 'react-native';
import {Button, Icon} from 'native-base';

export default class SwipeListHiddenRow extends Component {
  constructor(props){
    super(props)
    this.navigator = this.props.navigator;
    this.favs = this.props.favs;
    this.fav = this.props.fav;
    this.handleDeleteButtonPress = this.handleDeleteButtonPress.bind(this);
    //this.removeFromFavs = this.removeFromFavs.bind(this);
    //this.saveFavs = this.saveFavs.bind(this);
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
    this.removeFromFavs()
    this.saveFavs()
  }

  removeFromFavs(){
    this.favs.splice(this.favs.indexOf(this.fav), 1)
  }

  saveFavs(){
    AsyncStorage.setItem("favs", JSON.stringify(this.favs)) // stringify to avoid err:
      .then(function(){  console.log('SAVE FAVS', typeof(this.favs), this.favs.length)
        this.navigator.replace({name:'FAVS', params:{favs: this.favs}})
      }.bind(this))
      .catch(function(error){  console.log('SAVE ERR', error)  })
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
