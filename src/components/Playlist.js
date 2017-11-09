import React from 'react';

const Playlist = props => {

  let handleClick = () => {
    props.handlePlaylistSelect()
  }

  return (
    <li onClick ={handleClick} className={props.className}>
      <h2>{props.name}</h2>
      <h3>{props.description}</h3>
    </li>
  )
}

export default Playlist;
