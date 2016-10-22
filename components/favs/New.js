import React, {Component} from 'react';
import {Text, AsyncStorage} from 'react-native';
import {Container, Header, Button, Icon, Title, Content, Spinner} from 'native-base';
import StationPicker from "../stations/Picker"

export default class NewFav extends Component {
  constructor(props) {
    super(props);
    this.state = {origin: 'GCS', destination: 'NHV', displaySpinner:false};
    this.navigator = this.props.navigator;
    this.favs = this.props.favs;
    this.goBack = this.goBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addToFavs = this.addToFavs.bind(this);
    this.saveFavs = this.saveFavs.bind(this);
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
    this.addToFavs()
    this.saveFavs()
  }

  addToFavs(){
    this.favs.push({
      id: Date.now(),
      origin: this.state.origin,
      destination: this.state.destination
    })
  }

  saveFavs(){
    AsyncStorage.setItem("favs", JSON.stringify(this.favs)) // stringify to avoid err:
      .then(function(){  console.log('SAVE FAVS', this.favs.length)
        this.navigator.resetTo({name:'FAVS', params:{favs: this.favs}})
      }.bind(this))
      .catch(function(error){  console.log('SAVE ERR', error)  })
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
