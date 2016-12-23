import moment from 'moment';
import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native'
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
  }

  render() {
    const waitingMessage = "crunching train schedule data..."
    const waitingText = <Text style={{textAlign: 'center'}}>{waitingMessage}</Text>
    const trainsList = <TrainsList trains={this.state.trains} transitRoute={this.transitRoute} selectedDate={this.selectedDate}/>

    return (
      <Container>
        <Header>
          <Button transparent onPress={this.goBack}>
            <Icon name="md-arrow-back" />
          </Button>
          <Title>Trains from {this.transitRoute.origin.toUpperCase()} to {this.transitRoute.destination.toUpperCase()}</Title>
        </Header>

        <Content style={{margin:20}}>
          { this.state.trains.length > 0 ? trainsList : waitingText }
          { this.state.displaySpinner ? <Spinner color="#428bca" size="large"/> : null }
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

  fetchTrainSchedule(){
    var requestURL = "http://next-train-production.herokuapp.com/api/v0/trains.json?origin=" + this.transitRoute.origin.toUpperCase() + "&destination=" + this.transitRoute.destination.toUpperCase() + "&date=" + this.selectedDate
    //=> "http://next-train-production.herokuapp.com/api/v0/trains.json?origin=BRN&destination=NHV&date=2016-12-01"

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
        // var flash = {danger: ["There was an issue fetching schedule results from the server. Please try again or contact the developer."]}
        console.error(err)
      })
  }

  componentWillMount(){  console.log("TRAINS INDEX WILL MOUNT")  }
  componentDidMount(){
    console.log("TRAINS INDEX DID MOUNT")
    this.fetchTrainSchedule()
  }
  componentWillReceiveProps(nextProps){  console.log("TRAINS INDEX WILL RECEIVE PROPS")  }
  componentWillUpdate(nextProps, nextState){  console.log("TRAINS INDEX WILL UPDATE")  }
  componentDidUpdate(prevProps, prevState){  console.log("TRAINS INDEX DID UPDATE")  }
  componentWillUnmount(){  console.log("TRAINS INDEX WILL UNMOUNT")  }

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
