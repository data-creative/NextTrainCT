import React, {Component} from 'react';
import {Alert, Text} from 'react-native'
import {Container, Header, Title, Content, Footer, Button, Icon} from 'native-base';
import {searches} from "../../data/searches"
import styles from "../../styles/android"
import SearchesList from "./List"

export default class SearchesIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      searches: searches, // [],
      title:"NextTrain CT"
    }
    this.visitNewSearchPage = this.visitNewSearchPage.bind(this);
  }

  render() {
    const searches = this.state.searches
    const welcomeMessage = "Search trains using the button below."
    const welcomeText = <Text style={styles.text}>{welcomeMessage}</Text>
    const searchesList = <SearchesList searches={ searches } navigator={this.props.navigator}/>
    return (
      <Container>
        <Header>
          <Title>{this.state.title}</Title>
        </Header>

        <Content style={{margin:20}}>
          { searches.length > 0 ? searchesList : welcomeText }
        </Content>

        <Footer transparent style={styles.footer}>
          <Button rounded style={styles.button} onPress={this.visitNewSearchPage}>
            <Icon name="md-add" />
          </Button>
        </Footer>
      </Container>
    );
  }

  visitNewSearchPage(){
    console.log("VISIT NEW SEARCH PAGE")
    this.props.navigator.push({
      name: 'NewSearch',
      passProps:{}
    })
  }
};
