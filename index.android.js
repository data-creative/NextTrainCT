import React, { Component } from 'react';
import {AppRegistry, Text} from 'react-native';
import {
  Container, Header, Footer, Content, Title
  //Button, Icon, Spinner,
} from 'native-base';

class NextTrainCT extends Component {
  render() {
    return (
      <Container>
        <Header>
            <Title>NextTrain CT</Title>
        </Header>

        <Content>
            <Text>
              Welcome to React Native!
            </Text>
            <Text>
              To get started, edit index.android.js
            </Text>
            <Text>
              Double tap R on your keyboard to reload,{'\n'}
              Shake or press menu button for dev menu
            </Text>
        </Content>
    </Container>
    );
  }
}

AppRegistry.registerComponent('NextTrainCT', () => NextTrainCT);
