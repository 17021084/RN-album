// this index.ios.js - place for IOS code

// Import library
import React from 'react';
import {AppRegistry, Text} from 'react-native';

// Created componence
const App = () => <Text> Hello world </Text>;

// Render it on device
AppRegistry.registerComponent('albums', () => App);
