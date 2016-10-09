import React, {Component} from 'react';
import {Text} from 'react-native';
import {Container, Header, Button, Icon, Title, Content} from 'native-base';

export default class NewTransitRoute extends Component {
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
          <Text style={{marginTop:5, marginBottom:5}}>TODO: ORIGIN-STATION PICKER</Text>
          <Text style={{marginTop:5, marginBottom:5}}>TODO: DESTINATION-STATION PICKER</Text>
          <Button block primary style={{marginTop:5}}> Submit </Button>
        </Content>
      </Container>
    );
  }

  goBack(navigator){
    navigator.pop();
  }
};
