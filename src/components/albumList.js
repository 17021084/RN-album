import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = {albums: []};
  componentDidMount() {
    axios
      .get('http://localhost:5555/music_albums')
      .then((response) => {
        this.setState({albums: response.data});
      })
      .catch((error) => console.log(error));
  }

  //deprecated , ko nen call api tu day
  //   componentWillMount() {
  //     console.log('will mount');
  //   }
  renderAlbum() {
    return this.state.albums.map((album) => (
      <View key={album.id}>
        <Text>{album.title}</Text>
        <Text>{album.artist}</Text>
        <Text>{album.url}</Text>
        <Text>{album.image}</Text>
        <Text>{album.thumbnail_image}</Text>
      </View>
    ));
  }
  render() {
    return (
      <View>
        <Text> Album list abc !!!!</Text>
        {this.renderAlbum()}
      </View>
    );
  }
}

export default AlbumList;
