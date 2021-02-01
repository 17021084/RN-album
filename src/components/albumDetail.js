import React from 'react';
import {View, Image, Text, Linking} from 'react-native';
import Card from './card';
import CardSection from './cardSection';
import ButtonLearnMore from './ButtonLearnMore';

export default function AlbumDetail(props) {
  const {id, title, artist, url, image, thumbnail_image} = props.album;

  const {
    headerTextStyle,
    coverStyle,
    textContainerStyle,
    thumbnailStyle,
    headerStyle,
  } = styles;
  return (
    <Card key={id}>
      <CardSection style={headerStyle}>
        <Image
          style={thumbnailStyle}
          source={{
            uri: thumbnail_image,
          }}
        />
        <View style={textContainerStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={coverStyle} source={{uri: image}} />
      </CardSection>
      <CardSection>
        <ButtonLearnMore
          onPress={() => {
            Linking.openURL(url);
          }}>
          <Text> Listenn now </Text>
        </ButtonLearnMore>
      </CardSection>
    </Card>
  );
}

const styles = {
  textContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: 30,
  },
  headerTextStyle: {
    fontSize: 25,
    paddingBottom: 5,
  },
  thumbnailStyle: {
    width: 66,
    height: 58,
  },
  coverStyle: {
    // cách 1  width : thằng này hard code bằng cách có margin padding rồi thì chỉ cần lấy screen width - đi thôi
    //cách 2
    flex: 1, // children node se chiem toan bo dien tich
    width: null,
    height: 300, // neu ko khai bao mac dinh de 0
  },
};
