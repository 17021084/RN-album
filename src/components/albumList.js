import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import AlbumDetail from './albumDetail';

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

  render() {
    return (
      <View>
        <Text> Album list abc !!!!</Text>
        {this.state.albums.map((album) => (
          <AlbumDetail album={album} />
        ))}
      </View>
    );
  }
}

export default AlbumList;
