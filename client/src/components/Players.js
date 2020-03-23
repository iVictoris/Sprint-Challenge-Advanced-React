import React from 'react';
import { List, withData } from './';
import { usePlayers } from '../hooks';
const Players = props => {
  const [players, setPlayers, makePlayers] = usePlayers(props.data);
  return <List>{makePlayers()}</List>;
};

export default withData(Players)({ url: 'http://localhost:5000/api/players' });
