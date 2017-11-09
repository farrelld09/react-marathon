import React from 'react';
import PlaylistCollection from '../components/PlaylistCollection';
import SongCollection from '../components/SongCollection';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlaylistId: props.data.selectedPlaylistId,
      selectedSongId: null
    }
    this.selectPlaylist = this.selectPlaylist.bind(this)
    this.selectSong = this.selectSong.bind(this)
  }

  selectPlaylist (id) {
    this.setState( {selectedPlaylistId: id} )
  }

  selectSong (id) {
    this.setState( {selectedSongId: id} )
  }

  render() {
    let data = this.props.data;
    let selectedPlaylist = data.playlists.find(playlist => {
      return playlist.id === this.state.selectedPlaylistId
    })

    let currentSongs = data.songs.filter(song => {
      return selectedPlaylist.songs.includes(song.id)
    })
    return (
      <ul className="App row">
        <PlaylistCollection
          handleSelect = {this.selectPlaylist}
          playlists={data.playlists}
          selectedPlaylistId={this.state.selectedPlaylistId}
        />
        <SongCollection
        songs={currentSongs}
        handleSelect = {this.selectSong}
        selectedSongId = {this.state.selectedSongId}
        />
      </ul>
    );
  }
}

export default App;
