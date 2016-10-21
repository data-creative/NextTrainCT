import React, {Component} from 'react';
import {Text, AsyncStorage} from 'react-native';
import {Container, Header, Button, Icon, Title, Content, Spinner} from 'native-base';
import StationPicker from "../stations/Picker"

export default class NewFav extends Component {
  constructor(props) {
    super(props);
    this.state = {origin: 'GCS', destination: 'NHV', displaySpinner:false};
    this.navigator = this.props.navigator;
    this.goBack = this.goBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <Container>
        <Header>
          <Button transparent onPress={this.goBack}>
            <Icon name="md-arrow-back" />
          </Button>
          <Title>{"Choose a favorite route"}</Title>
        </Header>

        <Content style={{margin:20}}>
          <Text style={{fontWeight:'bold', fontSize:16}}>{"FROM:"}</Text>
          <StationPicker style={{marginTop:5, marginBottom:5}}
            selectedValue={this.state.origin}
            onValueChange={this.selectOrigin.bind(this)} />

          <Text style={{marginTop:15, fontWeight:'bold', fontSize:16}}>{"TO:"}</Text>
          <StationPicker style={{marginTop:5, marginBottom:5}}
            selectedValue={this.state.destination}
            onValueChange={this.selectDestination.bind(this)} />

          <Button block primary style={{marginTop:15}} onPress={ this.handleSubmit }>
            {"Save"}
          </Button>

          {this.state.displaySpinner ? <Spinner color="#428bca" size="large"/> : null}
        </Content>
      </Container>
    );
  }

  selectOrigin(val){
    this.setState({origin: val});
  }

  selectDestination(val){
    this.setState({destination: val});
  }

  goBack(){
    this.navigator.pop();
  }

  handleSubmit(){
    this.setState({displaySpinner:true})
    const newFav = {id: Date.now(), origin: this.state.origin, destination: this.state.destination};
    //this.favs.push(newFav);

    const nav = this.navigator
    AsyncStorage.setItem("@FavsStore:favs").then(function(){
      console.log('AsyncStorage Success', newFav)
      nav.resetTo({name:'CREATE_FAV'});
    }).catch(function(error){
      console.error('AsyncStorage Error:', error)
    })
  }

  componentWillMount(){  console.log("NEW WILL MOUNT")  }
  componentDidMount(){  console.log("NEW DID MOUNT")  }
  componentWillReceiveProps(nextProps){  console.log("NEW WILL RECEIVE PROPS")  }
  componentWillUpdate(nextProps, nextState){  console.log("NEW WILL UPDATE", nextState.origin, nextState.destination)  }
  componentDidUpdate(prevProps, prevState){  console.log("NEW DID UPDATE")  }
  componentWillUnmount(){  console.log("NEW WILL UNMOUNT")  }
};

NewFav.propTypes = {
  navigator: React.PropTypes.object.isRequired, // an instance of react-native Navigator
};
