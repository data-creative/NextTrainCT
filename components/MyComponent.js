import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class MyComponent extends Component {
  constructor(props){
    super(props)
    this.state = {message:"HELLO"}
    this.myFunc = this.myFunc.bind(this)
    this.handleButtonPress = this.handleButtonPress.bind(this)
  }

  render(){
    return (
      <View>
        <Text>{this.state.message}</Text>
        <TouchableOpacity onPress={function(){ this.handleButtonPress("GOODBYE") }.bind(this) }>
          <Text>Press Me</Text>
        </TouchableOpacity>
      </View>
    )
  }

  handleButtonPress(message){
    console.log("BUTTON WAS PRESSED WITH MESSAGE: " + message)
    this.myFunc(message)
  }

  myFunc(message){
    console.log("MY FUNCTION WAS CALLED")
    this.setState({message:message})
  }

}
