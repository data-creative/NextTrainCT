var d3 = require("d3");
import React, {Component} from 'react'
import {Picker} from 'native-base'
import Station from "../../app/models/station"

export default class StationPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: Station.all().sort(function(a, b){  return d3.ascending(a.name, b.name)  })
    }
  }

  render(){
    return (
      <Picker mode="dropdown" selectedValue={this.props.selectedValue} onValueChange={this.props.onValueChange} >
        {
          this.state.stations.map(function(station){
            return <Picker.Item key={station.id} value={station.abbrev} label={station.name} />
          })
        }
      </Picker>
    )
  }

  componentWillMount(){  console.log("PICKER WILL MOUNT")  }
  componentDidMount(){  console.log("PICKER DID MOUNT")  }
  componentWillReceiveProps(nextProps){  console.log("PICKER WILL RECEIVE PROPS")  }
  componentWillUpdate(nextProps, nextState){  console.log("PICKER WILL UPDATE")  }
  componentDidUpdate(prevProps, prevState){  console.log("PICKER DID UPDATE")  }
  componentWillUnmount(){  console.log("PICKER WILL UNMOUNT")  }
}
