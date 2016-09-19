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
        <Header backgroundColor="#039BE5">
            <Title>NextTrain CT</Title>
        </Header>

        <Content>
          <Text>
            Welcome to React Native!
          </Text>
          <Text>
            To get started, edit index.ios.js
          </Text>
          <Text>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </Content>
      </Container>
    );
  }
}

AppRegistry.registerComponent('NextTrainCT', () => NextTrainCT);
