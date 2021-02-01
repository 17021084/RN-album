import React from 'react';
import {View, Text} from 'react-native';

export default function Card(props) {
  const {cardContainer} = styles;
  return <View style={cardContainer}>{props.children}</View>;
}

const styles = {
  cardContainer: {
    paddingTop: 10,
    paddingBot: 10,
    borderWidth: 1,
    borderRadius: 2,
    border: 'dash',
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowOffset: {height: 0, width: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
  },
};
