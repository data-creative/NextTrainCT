import React, {Component} from 'react';
import {Text} from 'react-native'
import {Container, Header, Title, Content, Footer, Button, Icon} from 'native-base';

import styles from "../styles/android"

class Queries extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Title>NextTrain CT</Title>
        </Header>

        <Content style={styles.content}>
          <Text style={styles.text}>Press the button below to create a new Favorite Transit Schedule Search.</Text>
        </Content>

        <Footer transparent style={styles.footer}>
          <Button rounded style={styles.button}>
            <Icon name="md-add" />
          </Button>
        </Footer>
      </Container>
    );
  }
}

module.exports = Queries;
