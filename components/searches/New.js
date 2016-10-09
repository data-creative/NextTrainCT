import React, {Component} from 'react';
import {Text} from 'react-native';
import {Container, Header, Button, Icon, Title, Content} from 'native-base';

export default class SearchesNew extends Component {
  render() {
    const goBack = this.goBack;
    const navigator = this.props.navigator;
    return (
      <Container>
        <Header>
          <Button transparent onPress={function(){ goBack(navigator) }}>
            <Icon name="md-arrow-back" />
          </Button>
          <Title>{"Choose a favorite route"}</Title>
        </Header>

        <Content style={{margin:20}}>
          <Text>Hello choose your search options.</Text>
        </Content>
      </Container>
    );
  }

  goBack(navigator){
    navigator.pop();
  }
};
