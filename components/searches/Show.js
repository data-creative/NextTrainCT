import React, {Component} from 'react';
import {Text} from 'react-native'
import {Container, Header, Title, Content, Button, Icon} from 'native-base';
import {searchTitleAbbrevs} from "../../data/searches"

export default class SearchesShow extends Component {
  render() {
    const search = this.props.search;
    const searches = this.props.searches;
    const navigator = this.props.navigator;
    const goBack = this.goBack;
    return (
      <Container>
        <Header>
          <Button transparent onPress={function(){ goBack(navigator) }}>
            <Icon name="md-arrow-back" />
          </Button>
          <Title>{"Search Results" }</Title>
        </Header>

        <Content style={{margin:20}}>
          <Text>{searchTitleAbbrevs(search)}</Text>
          <Text>todo: list trains</Text>
        </Content>
      </Container>


    );
  }

  goBack(navigator){
    navigator.pop();
  }
};
