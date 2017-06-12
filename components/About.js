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

          <Title style={styles.firstHeading}>About</Title>
          <Text style={styles.text}>
            Search Shore Line East transit schedules in a fast and easy way.
            Save a route to your favorites, then find out when the next train is coming anytime with the click of a button.
          </Text>

          <Title style={styles.heading}>Disclaimer</Title>
          <Text style={styles.text}>
              This app relies on Shore Line East schedule data published online by CTtransit.
              The app developer is not affiliated with Shore Line East or CTtransit, and cannot guarantee the accuracy of their data.
              If you notice an issue with the schedule data, please contact the developer, who will notify CTtransit.
          </Text>

          <Title style={styles.heading}>Contact</Title>
          <Text style={styles.text}>
            This app was made by MJ Rossetti, a native of Branford, CT.
            Feel free to contact the developer with questions or feedback.
          </Text>
          <List>
            <ListItem iconLeft style={styles.listItem}>
              <Button transparent onPress={this.goTweet}>
                <Icon name='logo-twitter' style={styles.listItemIcon}/>
                <Text style={styles.listItemText}>Tweet @data_creative</Text>
              </Button>
            </ListItem>
            <ListItem iconLeft style={styles.listItem}>
              <Button transparent onPress={this.goEmail}>
                <Icon name='md-mail' style={styles.listItemIcon}/>
                <Text style={styles.listItemText}>Email datacreativellc@gmail.com</Text>
              </Button>
            </ListItem>
          </List>

          <Title style={styles.heading}>Donate</Title>
          <Text style={styles.text}>
            If you like this app, please consider donating.
            Your donations keep the servers running!
          </Text>
          <List>
            <ListItem iconLeft style={styles.listItem}>
              <Button transparent onPress={this.goVenmo}>
                <Icon name='logo-usd' style={styles.listItemIcon}/>
                <Text style={styles.listItemText}>{"Venmo $2.99 to @data_creative"}</Text>
              </Button>
            </ListItem>
          </List>

          <Title style={styles.heading}>Contribute</Title>
          <Text style={styles.text}>
            This app is powered by open data and open source software.
            If you know how to submit a PR or file an issue on GitHub, your contributions are welcome!
          </Text>
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
                <Text style={styles.listItemText}>Contribute to the web service</Text>
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
  firstHeading: {color: "#7a7a7a"},
  heading: {color: "#7a7a7a", marginTop: 10},
  listItem: {height:60},
  listItemIcon: {marginRight:13, color:'#282828'},
  listItemText: {fontSize:18}
});
