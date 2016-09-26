import React, { Component } from 'react';
import {AppRegistry, Navigator} from 'react-native';

import SearchesIndex from "./components/searches/Index";

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
        initialRoute={{ name: 'SearchesIndex' }}
        renderScene={ this.renderScene }
        configureScene={ this.configureScene }
      />
    );
  }

  renderScene(route, navigator) {
    switch (route.name) {
      case 'SearchesIndex':
        return <SearchesIndex navigator={navigator} {...route.passProps}  />
        break;
    };
  }

  //configureScene(route, routeStack){
  //  switch (route.type) {
  //    case 'Back':
  //      return Navigator.SceneConfigs.FloatFromLeft;
  //      break;
  //    default:
  //      return Navigator.SceneConfigs.PushFromRight;
  //    };
  //}

}

AppRegistry.registerComponent('NextTrainCT', () => App);
