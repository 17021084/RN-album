import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function ButtButtonLearnMore({onPress , children}) {
  //Nhan ham xuong
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.textStyle}>{children} </Text>
    </TouchableOpacity>
  );
}

const styles = {
  textStyle: {
    fontWeigt: '400',
    color: '#007afd',
    fontSize: 20,
    alignSelf: 'center',
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: '#fff ',
    alignSefl: 'stretch',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#007afd',
    height: 30,
  },
};
