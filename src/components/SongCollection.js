import React from 'react';
import Song from './Song'

const SongCollection = props => {
  let songComponents = props.songs.map((song) => {

      let className;
      if (song.id === props.selectedSongId) {
        className = "selected"
      }

      let songSelect = () => {
        props.handleSelect(song.id)
      }

    return(
      <Song
        songSelect={songSelect}
        className={className}
        key={song.id}
        id={song.id}
        name={song.name}
        artist={song.artist}
      />
    )
  })
  return (
    <div className="small-6 columns">
      <h1>Songs:</h1>
      {songComponents}
    </div>
  )
}

export default SongCollection;
