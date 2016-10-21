import React, { Component } from 'react';
import {AppRegistry, Navigator} from 'react-native';

import FavsIndex from "./components/favs/Index";
import NewFav from "./components/favs/New";
import TrainsIndex from "./components/trains/Index";

class App extends Component {
  render(){
    return (
      <Navigator style={{ flex:1 }}
        initialRoute={{ name: 'FAVS' }}
        renderScene={ this.renderScene }
        configureScene={ this.configureScene }
      />
    );
  }

  // todo: iterate over a hash of nav routes and actions
  renderScene(navRoute, navigator) {
    switch (navRoute.name) {
      case 'FAVS':
        return <FavsIndex navigator={navigator} {...navRoute.params}  />
        break;
      case 'NEW_FAV':
        return <NewFav navigator={navigator} {...navRoute.params}  />
        break;
      case 'CREATE_FAV':
        return <FavsIndex navigator={navigator} {...navRoute.params}  />
        break;
      case 'TRAINS':
        return <TrainsIndex navigator={navigator} {...navRoute.params}  />
        break;
      default:
        console.error("UNRECOGNIZED ROUTE -- " + navRoute.name)
    };
  }

  configureScene(navRoute, navRouteStack){
    console.log('ROUTE:', navRoute.name)
    if(navRouteStack){  console.log('ROUTE-STACK', `(${navRouteStack.length})`, navRouteStack.map(function(navRoute){ return navRoute.name}))  }

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
