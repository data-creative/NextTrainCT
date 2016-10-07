import React, {Component} from 'react';
import {Alert, Text, StyleSheet} from 'react-native'
import {Container, Header, Title, Content, Footer, Button, Icon} from 'native-base';
import {searches} from "../../data/searches"
import SearchesList from "./List"

const styles = StyleSheet.create({
  text:{
    textAlign: 'center'
  },
  footer: {
    backgroundColor: 'transparent',
    height:75
  },
  footerButton:{
    height:55,
    width:55,
    marginRight:20,
    marginBottom:20,
    alignSelf: 'flex-end'
  }
});

export default class SearchesIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      searches: searches, //[],
      title:"NextTrain CT"
    }
    this.goNew = this.goNew.bind(this);
  }

  render() {
    const searches = this.state.searches
    const welcomeMessage = "Search trains using the button below."
    const welcomeText = <Text style={styles.text}>{welcomeMessage}</Text>
    const searchesList = <SearchesList searches={ searches } navigator={this.props.navigator}/>
    const navigator = this.props.navigator;
    return (
      <Container>
        <Header>
          <Title>{this.state.title}</Title>
        </Header>

        <Content style={{margin:20}}>
          { searches.length > 0 ? searchesList : welcomeText }
        </Content>

        <Footer transparent style={styles.footer}>
          <Button rounded style={styles.footerButton} onPress={this.goNew}>
            <Icon name="md-add" />
          </Button>
        </Footer>
      </Container>
    );
  }

  goNew(){
    console.log("VISIT NEW SEARCH PAGE")
    this.props.navigator.push({name: 'NewSearch'})
  }

  componentWillMount(){  console.log("INDEX WILL MOUNT")  }
  componentDidMount(){  console.log("INDEX DID MOUNT")  }
  componentWillReceiveProps(nextProps){  console.log("INDEX WILL RECEIVE PROPS")  }
  componentWillUpdate(nextProps, nextState){  console.log("INDEX WILL UPDATE")  }
  componentDidUpdate(prevProps, prevState){  console.log("INDEX DID UPDATE")  }
  componentWillUnmount(){  console.log("INDEX WILL UNMOUNT")  }
};
