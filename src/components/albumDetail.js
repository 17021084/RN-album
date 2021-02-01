import React from 'react';
import {View, Image, Text} from 'react-native';
import Card from './card';
import CardSection from './cardSection';

export default function AlbumDetail(props) {
  const {id, title, artist, url, image, thumbnail_image} = props.album;

  const {textContainer, thumbnail, headerStyle} = styles;
  return (
    <Card key={id}>
      <CardSection style={headerStyle}>
        <Image
          style={thumbnail}
          source={{
            uri:
              'https://e1.pngegg.com/pngimages/87/618/png-clipart-taylor-swift-4-taylor-swift-thumbnail.png',
          }}
        />
        <View style={textContainer}>
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
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: 30,
  },
  headerStyle: {},
  thumbnail: {
    width: 66,
    height: 58,
  },
};
