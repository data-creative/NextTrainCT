import React, {Component} from 'react';
import {Alert, Text, StyleSheet, AsyncStorage} from 'react-native'
import {Container, Header, Title, Content, Footer, Button, Icon, Card, CardItem} from 'native-base';

import SwipeList from "./SwipeList"

export default class FavsIndex extends Component {
  constructor(props){
    super(props)
    this.state = {favs: this.props.favs || [] }
    this.navigator = this.props.navigator;
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  render() {
    const welcomeMessage = "Tap the button below to save a favorite transit route."
    const welcomeText = <Text style={styles.text}>{welcomeMessage}</Text>
    const list = <SwipeList favs={this.state.favs} navigator={this.navigator}/>

    return (
      <Container>
        <Header>
          <Title>NextTrain CT</Title>
        </Header>

        <Content style={{margin:20}}>
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
    const favs = this.state.favs
    this.navigator.push({name: 'NEW_FAV', params:{favs:favs}})
  }

  componentWillMount(){  console.log("FAVS INDEX WILL MOUNT")  }
  componentDidMount(){  console.log("FAVS INDEX DID MOUNT")
    //AsyncStorage.getItem("@FavsStore:favs").then(function(favs){
    //  console.log('AsyncStorage Success:', favs)
    //  if (favs) {
    //    this.setState({favs:favs})
    //  }
    //}).catch(function(error){
    //  console.error('AsyncStorage Error:', error)
    //})

    var component = this
    AsyncStorage.getAllKeys((err, keys) => {
      //if(err){ console.log(err)}
      console.log("AsyncStorage KEYS", keys)

      AsyncStorage.getItem('favs', (err, result) => {
        //if(err){ console.log(err)}
        console.log("AsyncStorage FAVS!", typeof(result), result);

        if (result) {
          component.setState({favs:favs})
        }
        //AsyncStorage.removeItem('favs', (err, result) => {
        //  console.log("REMOVE FAVS");
//
        //  AsyncStorage.getAllKeys((err, keys) => {
        //    console.log("STORAGE KEYS", keys)
        //  });
//
        //});
      });
    });

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
