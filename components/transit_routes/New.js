import React, {Component} from 'react';
import {Text} from 'react-native';
import {Container, Header, Button, Icon, Title, Content, Picker} from 'native-base';

import {stations} from "../../app/models/station"
//import {StationPicker} from "../stations/Picker"

export default class NewTransitRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originAbbrev: 'GCS',
      destinationAbbrev: 'NHV',
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
          <Text style={{fontWeight:'bold', fontSize:16}}>{"FROM:"}</Text>
          <Picker
            style={{marginTop:5, marginBottom:5}}
            mode="dropdown"
            selectedValue={this.state.originAbbrev}
            onValueChange={this.onOriginValueChange.bind(this)}>
            {
              stations.map(function(station){
                return <Picker.Item key={station.id} value={station.abbrev} label={station.name} />
              })
            }
          </Picker>

          <Text style={{marginTop:15, fontWeight:'bold', fontSize:16}}>{"TO:"}</Text>
          <Picker
            style={{marginTop:5, marginBottom:5}}
            mode="dropdown"
            selectedValue={this.state.destinationAbbrev}
            onValueChange={this.onDestinationValueChange.bind(this)}>
            {
              stations.map(function(station){
                return <Picker.Item key={station.id} value={station.abbrev} label={station.name} />
              })
            }
          </Picker>

          <Button block primary style={{marginTop:15}}>{"Save"}</Button>
        </Content>
      </Container>
    );
  }

  onOriginValueChange(val){
    this.setState({originAbbrev: val});
  }

  onDestinationValueChange(val){
    this.setState({destinationAbbrev: val});
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
