import React from 'react';
import {View, Text} from 'react-native';
import Card from './card';
import CardSection from './cardSection';

export default function AlbumDetail(props) {
  const {id, title, artist, url, image, thumbnail_image} = props.album;
  const {albumContainer, headerStyle} = styles;
  return (
    <Card key={id}>
      <CardSection style={headerStyle}>
        <Text>{thumbnail_image}</Text>
        <View>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Text>{image}</Text>
      </CardSection>
      <CardSection>
        <Text>{url}</Text>
      </CardSection>
    </Card>
  );
}

const styles = {
  albumContainer: {
    paddingTop: 10,
    paddingBot: 10,
  },
  headerStyle: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'red',
  },
};
