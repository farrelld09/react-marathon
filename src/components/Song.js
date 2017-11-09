import React from 'react';

const Song = props => {

  let handleClick = () => {
    props.songSelect()
  }

  return (
    <li onClick={handleClick} className={props.className}>
      <h2>{props.name}</h2>
      <h3>{props.artist}</h3>
    </li>
  )
}

export default Song;
