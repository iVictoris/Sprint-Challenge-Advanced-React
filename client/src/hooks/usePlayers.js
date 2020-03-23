import React from 'react';
import { Player } from '../components';

export const usePlayers = initialState => {
  let players = initialState;

  const setPlayers = newData => {
    players = newData;
  };

  const makePlayers = () => {
    /**
     * name, country, searches, id
     */
    const playerElements = players.map(player => {
      return <Player {...player} key={player.id} />;
    });
    return playerElements;
  };

  return [players, setPlayers, makePlayers];
};
