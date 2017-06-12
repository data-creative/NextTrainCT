import moment from 'moment';
import React, {Component} from 'react';
import {Text, StyleSheet, Alert, NetInfo} from 'react-native'
import {Container, Header, Title, Content, Button, Icon, Footer, Spinner} from 'native-base';

import TrainsList from "./List"

//moment.updateLocale('en', {calendar : {sameDay : '[Today]', nextDay : '[Tomorrow]'}})

export default class TrainsIndex extends Component {

  constructor(props){
    super(props)
    this.state = {displaySpinner:true, trains:[]}
    this.transitRoute = this.props.fav;
    this.selectedDate = this.props.selectedDate;
    this.navigator = this.props.navigator;
    this.fetchTrainSchedule = this.fetchTrainSchedule.bind(this);
    this.goBack = this.goBack.bind(this);
    this.alertAndGoBack = this.alertAndGoBack.bind(this);
  }

  render() {
    let waitingMessage = "Crunching train schedule data..."
    let waitingText = <Text style={{textAlign: 'center'}}>{waitingMessage}</Text>
    let trainsList = <TrainsList trains={this.state.trains} transitRoute={this.transitRoute} selectedDate={this.selectedDate}/>

    return (
      <Container>
        <Header>
          <Button transparent onPress={this.goBack}>
            <Icon name="md-arrow-back" />
          </Button>
          <Title>Trains from {this.transitRoute.origin.toUpperCase()} to {this.transitRoute.destination.toUpperCase()}</Title>
        </Header>

        <Content style={{margin:20}} >
          { this.state.trains.length > 0 ? trainsList : waitingText }
          { this.state.displaySpinner ? <Spinner color="#428bca" size="large" style={{alignSelf:"center"}}/> : null }
        </Content>

        {/*
          <Footer transparent style={styles.footer}>
            <Text style={styles.footerText}>
              <Text>Schedule published by </Text>
              <Text>
                {this.searchResults.schedule.publishedBy}
              </Text>
              <Text> on </Text>
              <Text>
                {moment(this.searchResults.schedule.publishedOn).format("MMMM D, YYYY")}
              </Text>
              <Text>.</Text>
            </Text>
          </Footer>
          */}

      </Container>
    );
  }

  goBack(){
    this.navigator.pop();
  }

  alertAndGoBack(){
    this.setState({displaySpinner:false, trains: []})
    Alert.alert(
      "Check Internet Connection",
      "This device is not connected to WiFi. Please connect to the Internet and try again.",
      [
        {
          text: 'OK',
          onPress: function(){
            console.log('OK Pressed')
            this.goBack()
          }.bind(this)
        }
      ],
      { cancelable: false }
    )
  }

  fetchTrainSchedule(){
    var requestURL = "http://next-train-production.herokuapp.com/api/v1/trains.json?origin=" + this.transitRoute.origin.toUpperCase() + "&destination=" + this.transitRoute.destination.toUpperCase() + "&date=" + this.selectedDate
    fetch(requestURL)
      .then(function(response) {
        //console.log("RAW RESPONSE", "STATUS", response.status, response.statusText, response.ok, "HEADERS", response.headers, response.url)
        return response.json()
      })
      .then(function(json){
        console.log("PARSED RESPONSE BODY", json)
        this.setState({displaySpinner:false, trains: json.results})
      }.bind(this))
      .catch(function(err){
        console.error("FETCH ERR", err) // alert... There was an issue fetching schedule results from the server. Please try again, or contact the developer if the issue persists."
      })
  }

  componentWillMount(){  console.log("TRAINS INDEX WILL MOUNT")  }
  componentDidMount(){  console.log("TRAINS INDEX DID MOUNT")
    NetInfo.isConnected.fetch()
      .then(function(isConnected){
        console.log('DEVICE CONNECTED? ', isConnected)
        if (isConnected) {
          this.fetchTrainSchedule()
        } else {
          this.alertAndGoBack()
        }
      }.bind(this))
      .catch(function(err){
        console.log("NETINFO ERROR", err)
      })
  }
  componentWillReceiveProps(nextProps){  console.log("TRAINS INDEX WILL RECEIVE PROPS")  }
  componentWillUpdate(nextProps, nextState){  console.log("TRAINS INDEX WILL UPDATE")  }
  componentDidUpdate(prevProps, prevState){  console.log("TRAINS INDEX DID UPDATE")  }
  componentWillUnmount(){ console.log("TRAINS INDEX WILL UNMOUNT") }
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'transparent',
    height:75,
    paddingLeft:20,
    //alignItems:'flex-start'
  },
  footerText:{
    fontSize:12,
    color: '#7a7a7a', //'#5067FF',
    alignSelf:'flex-start'
  }
});
