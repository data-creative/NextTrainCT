"use strict";

import moment from 'moment'

export default class Train {

  //static get timeZoneFormat(){return "H:mm:ssZ" } // "23:32:04-04:00"
  static get timeDisplayFormat(){return "h:mma" } // "10:32pm"
  static get upcomingThresholdMinutes(){ return 9 }

  // @example new Train({id:3613, departure: "2016-10-16T23:02:00-04:00", arrival:"2016-10-16T23:22:00-04:00"})
  constructor(props) {
    this.id = props.id;
    this.departure = props.departure;
    this.arrival = props.arrival;
  }

  departureDisplayTime(){
    return moment(this.departure).format(Train.timeDisplayFormat)
  }

  arrivalDisplayTime(){
    return moment(this.arrival).format(Train.timeDisplayFormat)
  }

  departureDisplayTimeFromNow(){
    return moment(this.departure).fromNow()
  }

  minutesFromNow(){
    return moment(this.departure).diff(moment(), 'minutes')
  }

  isUpcoming(){
    return this.minutesFromNow() > 0 && this.minutesFromNow() <= Train.upcomingThresholdMinutes
  }
};
