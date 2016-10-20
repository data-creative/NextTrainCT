import React, {Component} from 'react';
import {Alert, Text, StyleSheet} from 'react-native'
import {Container, Header, Title, Content, Footer, Button, Icon, Card, CardItem} from 'native-base';

import SwipeList from "./SwipeList"

export default class FavsIndex extends Component {
  constructor(props){
    super(props)
    this.title = "NextTrain CT";
    this.fakeFavs = [
      {"id":1111, "origin":"BRN", "destination":"NHV"},
      {"id":2222, "origin":"NHV", "destination":"BRN"},
      {"id":3333, "origin":"GUIL", "destination":"OSB"},
      //{"id":666, "origin":"BRN", "destination":"MAD"},
      //{"id":777, "origin":"MAD", "destination":"BRN"}
    ]
    this.favs = this.props.favs || this.fakeFavs // post-deletion redirect
    this.navigator = this.props.navigator;
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  render() {
    const welcomeMessage = "Tap the button below to save a favorite transit route."
    const welcomeText = <Text style={styles.text}>{welcomeMessage}</Text>
    const list = <SwipeList favs={this.favs} navigator={this.navigator}/>

    return (
      <Container>
        <Header>
          <Title>{this.title}</Title>
        </Header>

        <Content style={{margin:20}}>
          { this.favs.length > 0 ? list : welcomeText }
        </Content>

        <Footer transparent style={styles.footer}>
          <Button rounded style={styles.footerButton} onPress={this.handleButtonPress}>
            <Icon name="md-add" />
          </Button>
        </Footer>
      </Container>
    );
  }

  handleButtonPress(){
    this.navigator.push({
      name: 'NEW_FAV',
      params: {favs: this.favs}
    })
  }

  componentWillMount(){  console.log("INDEX WILL MOUNT")  }
  componentDidMount(){  console.log("INDEX DID MOUNT")  }
  componentWillReceiveProps(nextProps){  console.log("INDEX WILL RECEIVE PROPS")  }
  componentWillUpdate(nextProps, nextState){  console.log("INDEX WILL UPDATE")  }
  componentDidUpdate(prevProps, prevState){  console.log("INDEX DID UPDATE")  }
  componentWillUnmount(){  console.log("INDEX WILL UNMOUNT")  }
};

const styles = StyleSheet.create({
  text:{
    textAlign: 'center'
  },
  footer: {
    backgroundColor: 'transparent',
    height:75
  },
  footerButton:{
    height:55,
    width:55,
    marginRight:20,
    marginBottom:20,
    alignSelf: 'flex-end'
  }
});
