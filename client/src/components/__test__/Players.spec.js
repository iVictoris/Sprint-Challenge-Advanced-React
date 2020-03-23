import React from 'react';
import { render } from '@testing-library/react';
import { Players } from '../';

test('should render without crashing', () => {
  render(<Players />);
});

test('should pull in 100 Player items', () => {});
