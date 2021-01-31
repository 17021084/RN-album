// this index.ios.js - place for IOS code

// Import library
import React from 'react';
import {AppRegistry} from 'react-native';
import Header from './src/components/header';
// Created componence
const App = () => <Header headerText={'Albums!!'} />;

// Render it on device
AppRegistry.registerComponent('albums', () => App);
