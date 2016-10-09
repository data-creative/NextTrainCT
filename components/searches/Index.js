import React, {Component} from 'react';
import {Alert, Text, StyleSheet} from 'react-native'
import {Container, Header, Title, Content, Footer, Button, Icon, Card, CardItem} from 'native-base';
import SearchesCardList from "./CardList"

const myRoutes = [
  {"id":1111, "origin":"BNF", "destination":"NHV"},
  {"id":2222, "origin":"NHV", "destination":"BNF"},
  {"id":3333, "origin":"GLF", "destination":"OSB"}
];

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

export default class SearchesIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      routes: myRoutes, //[],
      title:"NextTrain CT"
    }
    this.goNew = this.goNew.bind(this);
  }

  render() {
    const routes = this.state.routes
    const welcomeMessage = "Search trains using the button below."
    const welcomeText = <Text style={styles.text}>{welcomeMessage}</Text>
    const searchesCardList = <SearchesCardList routes={routes} navigator={this.props.navigator}/>

    const navigator = this.props.navigator;
    return (
      <Container>
        <Header>
          <Title>{this.state.title}</Title>
        </Header>

        <Content style={{margin:20}}>
          { routes.length > 0 ? searchesCardList : welcomeText }
        </Content>

        <Footer transparent style={styles.footer}>
          <Button rounded style={styles.footerButton} onPress={this.goNew}>
            <Icon name="md-add" />
          </Button>
        </Footer>
      </Container>
    );
  }

  goNew(){
    console.log("VISIT NEW SEARCH PAGE")
    this.props.navigator.push({name: 'NewSearch'})
  }

  componentWillMount(){  console.log("INDEX WILL MOUNT")  }
  componentDidMount(){  console.log("INDEX DID MOUNT")  }
  componentWillReceiveProps(nextProps){  console.log("INDEX WILL RECEIVE PROPS")  }
  componentWillUpdate(nextProps, nextState){  console.log("INDEX WILL UPDATE")  }
  componentDidUpdate(prevProps, prevState){  console.log("INDEX DID UPDATE")  }
  componentWillUnmount(){  console.log("INDEX WILL UNMOUNT")  }
};
