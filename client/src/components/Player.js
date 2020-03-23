import React from 'react';

const Player = ({ name, searches, id, country }) => {
  return (
    <div className="Player Card">
      <img src={`https://robohash.org/${name}.png`} />
      <p>{name}</p>
      <p>{country}</p>
    </div>
  );
};

export default Player;
