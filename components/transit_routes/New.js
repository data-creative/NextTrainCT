

import React, {Component} from 'react';
import {Text} from 'react-native';
import {Container, Header, Button, Icon, Title, Content, Picker} from 'native-base';

export default class NewTransitRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOrigin: 'key2',
      selectedDestination: 'key3',
    }
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

          <Text style={{fontWeight:'bold', fontSize:16}}>
            {"ORIGIN STATION:"}
          </Text>
          <Picker style={{marginTop:5, marginBottom:5}}
                  mode="dropdown"
                  selectedValue={this.state.selectedOrigin}
                  onValueChange={this.onOriginValueChange.bind(this)}>
            <Picker.Item selected label="Branford" value="key0" />
            <Picker.Item label="Guilford" value="key1" />
            <Picker.Item label="New Haven Union" value="key2" />
            <Picker.Item label="New Haven State" value="key3" />
          </Picker>

          <Text style={{marginTop:15, fontWeight:'bold', fontSize:16}}>
            {"DESTINATION STATION:"}
          </Text>
          <Picker style={{marginTop:5, marginBottom:5}}
                  mode="dropdown"
                  selectedValue={this.state.selectedDestination}
                  onValueChange={this.onDestinationValueChange.bind(this)}>
            <Picker.Item label="Hello" value="key0" />
            <Picker.Item label="Dogs" value="key1" />
            <Picker.Item selected label="Birds" value="key2" />
            <Picker.Item label="Elephants" value="key3" />
          </Picker>

          <Button block primary style={{marginTop:15}}>
            Save
          </Button>
        </Content>
      </Container>
    );
  }

  onOriginValueChange(val){
    this.setState({selectedOrigin: val});
  }

  onDestinationValueChange(val){
    this.setState({selectedDestination: val});
  }

  goBack(navigator){
    navigator.pop();
  }

  componentWillMount(){  console.log("NEW WILL MOUNT")  }
  componentDidMount(){  console.log("NEW DID MOUNT")  }
  componentWillReceiveProps(nextProps){  console.log("NEW WILL RECEIVE PROPS")  }
  componentWillUpdate(nextProps, nextState){
    console.log("NEW WILL UPDATE", nextState)
  }
  componentDidUpdate(prevProps, prevState){  console.log("NEW DID UPDATE")  }
  componentWillUnmount(){  console.log("NEW WILL UNMOUNT")  }
};
