import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
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
      <ScrollView>
        <Text style={styles.textStyle}> Album list abc !!!!</Text>
        {this.state.albums.map((album) => (
          <AlbumDetail album={album} />
        ))}
      </ScrollView>
    );
  }
}
const styles = {
  textStyle: {textAlign: 'center', padding: 20, fontSize: 30},
};
export default AlbumList;
