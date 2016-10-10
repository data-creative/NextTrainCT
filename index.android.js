import React, { Component } from 'react';
import {AppRegistry, Navigator} from 'react-native';

import TransitRoutesIndex from "./components/transit_routes/Index";
import NewTransitRoute from "./components/transit_routes/New";
import TrainsIndex from "./components/trains/Index";

class App extends Component {
  render(){
    return (
      <Navigator style={{ flex:1 }}
        initialRoute={{ name: 'NEW_TRANSIT_ROUTE' }}
        renderScene={ this.renderScene }
        configureScene={ this.configureScene }
      />
    );
  }

  // todo: iterate over a hash of nav routes and actions
  renderScene(navRoute, navigator) {
    switch (navRoute.name) {
      case 'TRANSIT_ROUTES':
        return <TransitRoutesIndex navigator={navigator} {...navRoute.params}  />
        break;
      case 'NEW_TRANSIT_ROUTE':
        return <NewTransitRoute navigator={navigator} {...navRoute.params}  />
        break;
      case 'TRAINS':
        return <TrainsIndex navigator={navigator} {...navRoute.params}  />
        break;
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
