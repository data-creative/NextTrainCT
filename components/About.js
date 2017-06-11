import React, {Component} from 'react';
import {Text, StyleSheet, Linking, TouchableOpacity} from 'react-native'
import {
  Container, Header, Title, Content, Footer, Button, Icon, List, ListItem, Badge
} from 'native-base';

export default class About extends Component {
  constructor(props){
    super(props)
    this.navigator = this.props.navigator;
    this.goBack = this.goBack.bind(this);
    this.goEmail = this.goEmail.bind(this);
    this.goTweet = this.goTweet.bind(this);
    this.goVenmo = this.goVenmo.bind(this);
    this.goClientRepo = this.goClientRepo.bind(this);
    this.goServerRepo = this.goServerRepo.bind(this);
    this.goGTFS = this.goGTFS.bind(this);
  }

  render() {
    return (
      <Container>
        <Header>
          <Button transparent onPress={this.goBack}><Icon name="md-arrow-back" /></Button>
          <Title>About NextTrain CT</Title>
        </Header>

        <Content style={styles.content}>
          <Title style={styles.heading}>About</Title>
          <Text style={styles.text}>Use this app to search Shore Line East transit schedules. Save your favorite transit routes, then find out when the next train is arriving with the click of a button.</Text>

          <Title style={styles.heading}>Developer</Title>
          <Text style={styles.text}>This app was made in New Haven by MJ Rossetti. The developer is not affiliated with Shore Line East or CTtransit.</Text>

          <Title style={styles.heading}>Contact</Title>
          <Text style={styles.text}>Please provide the developer with feedback!</Text>
          <List>
            <ListItem iconLeft style={styles.listItem}>
              <Button transparent onPress={this.goEmail}>
                <Icon name='md-mail' style={styles.listItemIcon}/>
                <Text style={styles.listItemText}>Email datacreativellc@gmail.com</Text>
              </Button>
            </ListItem>
            <ListItem iconLeft style={styles.listItem}>
              <Button transparent onPress={this.goTweet}>
                <Icon name='logo-twitter' style={styles.listItemIcon}/>
                <Text style={styles.listItemText}>Tweet @data_creative</Text>
              </Button>
            </ListItem>
          </List>


          <Title style={styles.heading}>Schedules</Title>
          <Text style={styles.text}>This app is powered by open transit schedule data published by CTtransit in General Transit Feed Specification (GTFS) format. The developer has created a web service to check for new schedules once every hour and provide the results upon request.</Text>
          <List>
            <ListItem iconLeft style={styles.listItem}>
              <Button transparent onPress={this.goGTFS}>
                <Icon name='md-train' style={styles.listItemIcon}/>
                <Text style={styles.listItemText}>Shore Line East GTFS data</Text>
              </Button>
            </ListItem>
          </List>

          <Title style={styles.heading}>Pricing</Title>
          <Text style={styles.text}>This app is free to use, but the servers cost money. Your donations keep the servers running!</Text>
          <List>
            <ListItem iconLeft style={styles.listItem}>
              <Button transparent onPress={this.goVenmo}>
                <Icon name='logo-usd' style={styles.listItemIcon}/>
                <Text style={styles.listItemText}>{"Venmo $2.99 to @data_creative"}</Text>
              </Button>
            </ListItem>
          </List>

          <Title style={styles.heading}>Source Code</Title>
          <Text style={styles.text}>This app is powered by open source software. Your contributions are welcome!</Text>
          <List>
            <ListItem iconLeft style={styles.listItem}>
              <Button transparent onPress={this.goClientRepo}>
                <Icon name='logo-github' style={styles.listItemIcon}/>
                <Text style={styles.listItemText}>Contribute to the mobile app</Text>
              </Button>
            </ListItem>
            <ListItem iconLeft style={styles.listItem}>
              <Button transparent onPress={this.goServerRepo}>
                <Icon name='logo-github' style={styles.listItemIcon}/>
                <Text style={styles.listItemText}>Contribute to the web service (API)</Text>
              </Button>
            </ListItem>
          </List>



        </Content>

      </Container>
    );
  }

  goBack(){
    this.navigator.pop()
  }

  linkTo(url){
    Linking.openURL(url).catch(function(err){ console.error("LINKING ERROR", err) })
  }

  goEmail(){
    this.linkTo("mailto:datacreativellc@gmail.com")
  }

  goTweet(){
    this.linkTo("https://twitter.com/data_creative")
  }

  goVenmo(){
    this.linkTo("https://venmo.com/data_creative?txn=pay&amount=2.99")
  }

  goClientRepo(){
    this.linkTo("https://github.com/data-creative/NextTrainCT")
  }

  goServerRepo(){
    this.linkTo("https://github.com/data-creative/next-train-api")
  }

  goGTFS(){
    this.linkTo("https://www.cttransit.com/about/developers")
  }
};

About.propTypes = {
  navigator: React.PropTypes.object.isRequired // an instance of react-native Navigator
};

const styles = StyleSheet.create({
  content: {margin: 20},
  text: {marginTop: 10},
  heading: {color: "#7a7a7a", marginTop: 10},
  listItem: {height:60},
  listItemIcon: {marginRight:13, color:'#282828'},
  listItemText: {fontSize:18}
});
