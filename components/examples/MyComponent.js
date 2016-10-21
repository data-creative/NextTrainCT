import React, { Component } from 'react';
import {View, Text} from 'react-native';
import ReactHeight from 'react-height';

export default class MyComponent extends Component {
  render(){
    return (
      <ReactHeight onHeightReady={height => console.log(height)}>
        <View>
          <Text>Hello world</Text>
        </View>
      </ReactHeight>
    )
  }
}
