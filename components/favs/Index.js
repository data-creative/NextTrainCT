import React, {Component} from 'react';
import {Alert, Text, StyleSheet, AsyncStorage} from 'react-native'
import {Container, Header, Title, Content, Footer, Button, Icon, Card, CardItem, Spinner} from 'native-base';

import SwipeList from "./SwipeList"

export default class FavsIndex extends Component {
  //static get storageKey(){ return "favs"}

  constructor(props){
    super(props)
    console.log("INDEX PROPS FAVS", typeof(this.props.favs), this.props.favs)
    this.state = {
      favs: (this.props.favs ? this.props.favs : []),
      displaySpinner:false
    }
    this.navigator = this.props.navigator;
    this.fetchAll = this.fetchAll.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  render() {
    const welcomeMessage = "Tap the button below to add a favorite transit route."
    const welcomeText = <Text style={styles.text}>{welcomeMessage}</Text>
    const list = <SwipeList favs={this.state.favs} navigator={this.navigator}/>

    return (
      <Container>
        <Header>
          <Title>NextTrain CT</Title>
        </Header>

        <Content style={{margin:20}}>
          { this.state.displaySpinner ? <Spinner color="#428bca" size="large"/> : null }
          { this.state.favs.length > 0 ? list : welcomeText }
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
    const favs = this.state.favs // todo
    this.navigator.push({name: 'NEW_FAV', params:{favs:favs}})
  }

  fetchAll(){
    AsyncStorage.getItem('favs')
      .then(function(results){  console.log("FETCH ALL", results);
        var nextState = {displaySpinner:false}
        if (results){  nextState.favs = JSON.parse(results)  }
        this.setState(nextState)
      }.bind(this))
      .catch(function(err){
        console.error("FETCH ERROR", err)
        this.removeAll() // temporary
      }.bind(this))
  }

  removeAll(){
    AsyncStorage.removeItem('favs')
      .then(function(result){
        console.log("REMOVE ALL");
        AsyncStorage.getAllKeys((err, keys) => {
          console.log("STORAGE KEYS", keys)
        })
      })
      .catch(function(err){  console.error("REMOVE ERROR", err)  })
  }

  componentWillMount(){  console.log("FAVS INDEX WILL MOUNT")  }
  componentDidMount(){
    console.log("FAVS INDEX DID MOUNT")
    if(!this.props.favs){  this.fetchAll()  }
  }
  componentWillReceiveProps(nextProps){  console.log("FAVS INDEX WILL RECEIVE PROPS")  }
  componentWillUpdate(nextProps, nextState){  console.log("FAVS INDEX WILL UPDATE")  }
  componentDidUpdate(prevProps, prevState){  console.log("FAVS INDEX DID UPDATE")  }
  componentWillUnmount(){  console.log("FAVS INDEX WILL UNMOUNT")  }
};

FavsIndex.propTypes = {
  navigator: React.PropTypes.object.isRequired, // an instance of react-native Navigator
  favs: React.PropTypes.arrayOf(React.PropTypes.object)
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
