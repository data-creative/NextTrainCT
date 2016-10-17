import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class MyComponent extends Component {
  constructor(props){
    super(props)
    this.state = {messages:["THANKS", "MERCI", "GRAZIE"]}
    this.myFunc = this.myFunc.bind(this)
    this.handleButtonPress = this.handleButtonPress.bind(this)
  }

  render(){

    return (
      <View>
        <Text>{this.state.message}</Text>

        {
          this.state.messages.map(function(message, index){
            return (
              <TouchableOpacity key={index} onPress={function(){ this.handleButtonPress(message) }.bind(this) }>
                <Text>Press Me</Text>
              </TouchableOpacity>
            )
          }, this)
        }
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
