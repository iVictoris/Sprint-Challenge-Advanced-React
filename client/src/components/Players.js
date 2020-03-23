import React from 'react';
import { List, withData } from './';
import { withPlayer } from '../hooks';
const Players = props => {
  return <List></List>;
};

export default withData(Players)({ url: 'http://localhost:5000/api/players' });
