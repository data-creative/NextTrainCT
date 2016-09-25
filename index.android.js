import React, { Component } from 'react';
import {AppRegistry, Navigator} from 'react-native';

import QueriesIndexPage from "./components/Queries";

class App extends Component {
  componentWillMount(){  console.log("APP WILL MOUNT")  }
  componentDidMount(){  console.log("APP DID MOUNT")  }
  componentWillReceiveProps(nextProps){  console.log("APP WILL RECEIVE PROPS")  }
  componentWillUpdate(nextProps, nextState){  console.log("APP WILL UPDATE")  }
  componentDidUpdate(prevProps, prevState){  console.log("APP DID UPDATE")  }
  componentWillUnmount(){  console.log("APP WILL UNMOUNT")  }

  render(){
    return (
      <Navigator
        style={{ flex:1 }}
        initialRoute={{ name: 'Queries' }}
        renderScene={ this.renderScene }
        configureScene={ this.configureScene }
      />
    );
  }

  renderScene(route, navigator) {
    switch (route.name) {
      case 'Queries':
        return <QueriesIndexPage navigator={navigator} {...route.passProps}  />
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

}

AppRegistry.registerComponent('NextTrainCT', () => App);
