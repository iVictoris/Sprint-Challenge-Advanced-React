import React from 'react';

const Player = ({ name, searches, id, country }) => {
  return (
    <div className="Player Card">
      <img src={`https://robohash.org/${name}.png`} />
      <section className="Player-info">
        <section>
          <p>Name</p>
          <p>{name}</p>
        </section>
        <section>
          <p>Country</p>
          <p>{country}</p>
        </section>
      </section>
    </div>
  );
};

export default Player;
