import React, {Component} from 'react';
import {Text} from 'react-native'
import {Container, Header, Title, Content, Button, Icon} from 'native-base';
import {searchTitleAbbrevs} from "../../app/models/route"

export default class TrainsIndex extends Component {
  render() {
    const route = this.props.route;
    const routes = this.props.routes;
    const navigator = this.props.navigator;
    const goBack = this.goBack;
    return (
      <Container>
        <Header>
          <Button transparent onPress={function(){ goBack(navigator) }}>
            <Icon name="md-arrow-back" />
          </Button>
          <Title>{"Trains from ABC to XYZ" }</Title>
        </Header>

        <Content style={{margin:20}}>
          <Text>{searchTitleAbbrevs(route)}</Text>
          <Text>todo: list trains</Text>
        </Content>
      </Container>


    );
  }

  goBack(navigator){
    navigator.pop();
  }
};
