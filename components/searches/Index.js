import React, {Component} from 'react';
import {Text} from 'react-native'
import {Container, Header, Title, Content, Footer, Button, Icon} from 'native-base';

import styles from "../../styles/android"
import SearchesList from "./List"

export default class SearchesIndex extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Title>NextTrain CT</Title>
        </Header>

        <Content style={styles.content}>
          <Text style={styles.text}>Press the button below to search train schedules.</Text>
          <SearchesList searches={ [{"id":101, "title":"New Haven to Guilford"}, {"id":202, "title":"Guilford to New Haven"}] } />
        </Content>

        <Footer transparent style={styles.footer}>
          <Button rounded style={styles.button}>
            <Icon name="md-add" />
          </Button>
        </Footer>
      </Container>
    );
  }
};
