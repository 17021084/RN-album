// this index.ios.js - place for IOS code

// Import library
import React from 'react';
import ReactNative from 'react-native';

// Created componence
const App = () => {
  return <Text> Hello world </Text>;
};

// Render it on device
ReactNative.AppRegistry.registerComponent('albums', () => App);
