import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';

const MyHeader = props => {
  return (
    <Header
      centerComponent={{ text: props.title, style: { color: '#000000', fontSize:20,fontWeight:"bold", } }}
      backgroundColor = "#f76fee"
    />
  );
};

export default MyHeader;
