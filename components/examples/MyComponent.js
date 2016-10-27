import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ReactHeight from 'react-height';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
    this.onHeightReady = this.onHeightReady.bind(this);
  }

  onHeightReady(height) {
    this.setState({ height });
  }

  render() {
    return (
      <ReactHeight onHeightReady={function(height){
          console.log("HEIGHT IS READY:", height)
        }}>
        <View>
          <Text>Hello world</Text>
        </View>
      </ReactHeight>
    );
  }
}

export default MyComponent;
