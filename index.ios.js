// this index.ios.js - place for IOS code
// Import library
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumList';

// Created componence
const App = () => (
  <View
    // comment thằng này thì khi scoll sẽ bị dừng lại 1 tý. cảm giác hơi lag ko smomth
    // FLex 1 sẽ giúp hiển thị hết list.
    style={{flex: 1}}>
    <Header headerText={'Albums!!'} />
    <AlbumList />
  </View>
);

// Render it on device
AppRegistry.registerComponent('albums', () => App);
