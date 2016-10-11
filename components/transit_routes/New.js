import React, {Component} from 'react';
import {Text} from 'react-native';
import {Container, Header, Button, Icon, Title, Content} from 'native-base';
import StationPicker from "../stations/Picker"

export default class NewTransitRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {origin: 'GCS', destination: 'NHV'}
  }

  render() {
    const goBack = this.goBack;
    const navigator = this.props.navigator;

    return (
      <Container>
        <Header>
          <Button transparent onPress={function(){ goBack(navigator) }}>
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

          <Button block primary style={{marginTop:15}}>{"Save"}</Button>
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

  goBack(navigator){
    navigator.pop();
  }

  componentWillMount(){  console.log("NEW WILL MOUNT")  }
  componentDidMount(){  console.log("NEW DID MOUNT")  }
  componentWillReceiveProps(nextProps){  console.log("NEW WILL RECEIVE PROPS", nextProps)  }
  componentWillUpdate(nextProps, nextState){
    console.log("NEW WILL UPDATE", nextState.origin, nextState.destination)
  }
  componentDidUpdate(prevProps, prevState){  console.log("NEW DID UPDATE")  }
  componentWillUnmount(){  console.log("NEW WILL UNMOUNT")  }
};
