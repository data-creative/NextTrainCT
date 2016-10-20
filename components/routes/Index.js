import React, {Component} from 'react';
import {Alert, Text, StyleSheet} from 'react-native'
import {Container, Header, Title, Content, Footer, Button, Icon, Card, CardItem} from 'native-base';

import RoutesSwipeList from "./SwipeList"

export default class RoutesIndex extends Component {
  constructor(props){
    super(props)
    this.fakeRoutes = [
      {"id":1111, "origin":"BRN", "destination":"NHV"},
      {"id":2222, "origin":"NHV", "destination":"BRN"},
      {"id":3333, "origin":"GUIL", "destination":"OSB"},
      //{"id":666, "origin":"BRN", "destination":"MAD"},
      //{"id":777, "origin":"MAD", "destination":"BRN"}
    ]

    var routes = this.props.routes || this.fakeRoutes // post-route-deletion redirect

    this.state = {
      routes: routes,
      title:"NextTrain CT",
    }
    this.navigator = this.props.navigator;
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  render() {
    const welcomeMessage = "Tap the button below to save a transit route."
    const welcomeText = <Text style={styles.text}>{welcomeMessage}</Text>
    const list = <RoutesSwipeList routes={this.state.routes} navigator={this.navigator}/>

    return (
      <Container>
        <Header>
          <Title>{this.state.title}</Title>
        </Header>

        <Content style={{margin:20}}>
          { this.state.routes.length > 0 ? list : welcomeText }
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
      params: {routes: this.state.routes}
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
