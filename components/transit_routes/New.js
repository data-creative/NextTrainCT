import React, {Component} from 'react';
import {Text} from 'react-native';
import {Container, Header, Button, Icon, Title, Content} from 'native-base';
import StationPicker from "../stations/Picker"

export default class NewTransitRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {origin: 'GCS', destination: 'NHV'};
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
    this.props.navigator.pop();
  }

  handleSubmit(){
    console.log("SAVE ME! SAVE ME! SAVE ME! AJAX. SPINNER.")
    this.props.navigator.push({
      name:'CREATE_TRANSIT_ROUTE',
      params:{
        transitRoute:{origin: this.state.origin, destination: this.state.destination}
      }
    });
  }

  componentWillMount(){  console.log("NEW WILL MOUNT")  }
  componentDidMount(){  console.log("NEW DID MOUNT")  }
  componentWillReceiveProps(nextProps){  console.log("NEW WILL RECEIVE PROPS")  }
  componentWillUpdate(nextProps, nextState){  console.log("NEW WILL UPDATE", nextState.origin, nextState.destination)  }
  componentDidUpdate(prevProps, prevState){  console.log("NEW DID UPDATE")  }
  componentWillUnmount(){  console.log("NEW WILL UNMOUNT")  }
};
