"use strict";

import moment from 'moment'

export default class Train {

  //static get timeZoneFormat(){return "H:mm:ssZ" } // like "23:32:04-04:00"
  static get timeDisplayFormat(){return "h:mma" } // like "10:32pm"

  // @example new Train({id:1, departure: "2016-10-16T23:02:00-04:00", arrival:"2016-10-16T23:22:00-04:00"})
  constructor(props) {
    this.id = props.id;
    this.departure = props.departure;
    this.arrival = props.arrival;
  }

  isUpcoming(){
    return true // todo
  }

  departureDisplayTime(){
    return moment(this.departure).format(Train.timeDisplayFormat)
  }

  arrivalDisplayTime(){
    return moment(this.arrival).format("h:mma")
  }

  departureDisplayTimeFromNow(){
    //console.log(this, "DEPARTS ...", "IN 5 MINS")
    return "in 5 mins"
  }
};
