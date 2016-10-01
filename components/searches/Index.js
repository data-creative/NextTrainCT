import React, {Component} from 'react';
import {Alert, Text} from 'react-native'
import {Container, Header, Title, Content, Footer, Button, Icon} from 'native-base';

import {searches} from "../../data/searches"
import styles from "../../styles/android"

import SearchesList from "./List"

export default class SearchesIndex extends Component {
  constructor(props){
    super(props)
    this.state = {searches:[]}
    this.handlePress = this.handlePress.bind(this);
  }

  render() {
    const searches = this.state.searches
    const welcomeMessage = "Search trains using the button below."
    const welcomeText = <Text style={styles.text}>{welcomeMessage}</Text>
    const searchesList = <SearchesList searches={ searches } />
    return (
      <Container>
        <Header>
          <Title>NextTrain CT</Title>
        </Header>

        <Content style={styles.content}>
          { searches.length > 0 ? searchesList : welcomeText }
        </Content>

        <Footer transparent style={styles.footer}>
          <Button rounded style={styles.button} onPress={this.handlePress}>
            <Icon name="md-add" />
          </Button>
        </Footer>
      </Container>
    );
  }

  handlePress(){
    //Alert.alert("Hello there.");
    this.setState({searches:searches})
  }
};
