// this index.ios.js - place for IOS code
// Import library
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumList';

// Created componence
const App = () => (
  <View>
    <Header headerText={'Albums!!'} />
    <AlbumList />
  </View>
);

// Render it on device
AppRegistry.registerComponent('albums', () => App);
