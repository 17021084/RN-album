import React from 'react';
import {View, Text} from 'react-native';
import Card from './card';

export default function AlbumDetail(props) {
  const {id, title, artist, url, image, thumbnail_image} = props.album;
  const {albumContainer} = styles;
  return (
    <Card key={id}>
      <Text>{title}</Text>
      <Text>{artist}</Text>
      <Text>{url}</Text>
      <Text>{image}</Text>
      <Text>{thumbnail_image}</Text>
    </Card>
  );
}

const styles = {
  albumContainer: {
    paddingTop: 10,
    paddingBot: 10,
  },
};
