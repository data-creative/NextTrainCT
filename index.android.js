import React, { Component } from 'react';
import {AppRegistry, Navigator} from 'react-native';

import RoutesIndex from "./components/routes/Index";
import NewRoute from "./components/routes/New";
import TrainsIndex from "./components/trains/Index";

class App extends Component {
  render(){
    return (
      <Navigator style={{ flex:1 }}
        initialRoute={{ name: 'ROUTES' }}
        renderScene={ this.renderScene }
        configureScene={ this.configureScene }
      />
    );
  }

  // todo: iterate over a hash of nav routes and actions
  renderScene(navRoute, navigator) {
    switch (navRoute.name) {
      case 'ROUTES':
        return <RoutesIndex navigator={navigator} {...navRoute.params}  />
        break;
      case 'NEW_ROUTE':
        return <NewRoute navigator={navigator} {...navRoute.params}  />
        break;
      case 'CREATE_ROUTE':
        return <RoutesIndex navigator={navigator} {...navRoute.params}  />
        break;
      case 'TRAINS':
        return <TrainsIndex navigator={navigator} {...navRoute.params}  />
        break;
      default:
        console.error("UNRECOGNIZED ROUTE -- " + navRoute.name)
    };
  }

  configureScene(navRoute, navRouteStack){
    switch (navRoute.transition) {
      case 'Back':
        return Navigator.SceneConfigs.FloatFromLeft;
        break;
      case 'Modal':
        return Navigator.SceneConfigs.FloatFromBottomAndroid;
        break;
      default:
        return Navigator.SceneConfigs.FadeAndroid;
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
