import React from 'react';
import {View, Text} from 'react-native';

export default function CardSection(props) {
  return <View style={styles.containerStyle}>{props.children}</View>;
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
};
