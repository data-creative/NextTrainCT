'use strict';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content:{
    margin:20
  },
  text:{
    textAlign: 'center'
  },
  footer:{
    backgroundColor: 'transparent',
    flex:1,
    flexDirection: 'row', // this is the primary axis, governed by justifyContent; the opposite axis governed by alignItems
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  button:{
    height:46,
    width:46,
    marginRight:15,
    marginBottom:15,
    alignSelf: 'flex-end'
  }
});


module.exports = styles;
