import React, { Component } from 'react';
import {AppRegistry, Navigator} from 'react-native';

import SearchesIndex from "./components/searches/Index";
import SearchesNew from "./components/searches/New";
import SearchesShow from "./components/searches/Show";

class App extends Component {
  render(){
    return (
      <Navigator style={{ flex:1 }}
        initialRoute={{ name: 'Searches' }}
        renderScene={ this.renderScene }
        configureScene={ this.configureScene }
      />
    );
  }

  // todo: iterate over a hash of routes and actions
  renderScene(route, navigator) {
    switch (route.name) {
      case 'Searches':
        return <SearchesIndex navigator={navigator} {...route.passProps}  />
        break;
      case 'NewSearch':
        return <SearchesNew navigator={navigator} {...route.passProps}  />
        break;
      case 'SearchResults':
        return <SearchesShow navigator={navigator} {...route.passProps}  />
        break;
    };
  }

  configureScene(route, routeStack){
    switch (route.type) {
      case 'Back':
        return Navigator.SceneConfigs.FloatFromLeft;
        break;
      default:
        return Navigator.SceneConfigs.PushFromRight;
      };
  }

  componentWillMount(){  console.log("APP WILL MOUNT")  }
  componentDidMount(){  console.log("APP DID MOUNT")  }
  componentWillReceiveProps(nextProps){  console.log("APP WILL RECEIVE PROPS")  }
  componentWillUpdate(nextProps, nextState){  console.log("APP WILL UPDATE")  }
  componentDidUpdate(prevProps, prevState){  console.log("APP DID UPDATE")  }
  componentWillUnmount(){  console.log("APP WILL UNMOUNT")  }
}

AppRegistry.registerComponent('NextTrainCT', () => App);
