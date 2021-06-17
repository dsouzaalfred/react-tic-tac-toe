import React from 'react';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {Grid} from '../../components/Grid';
import {initialState} from '../../constants';

it('Renders Cell correctly', () => {
  const tree = renderer.create(<Grid gameState={initialState} />).toJSON();
  expect(tree).toMatchSnapshot();
});

// check there are nine cells
test('Is empty on initial load', () => {
  const {getAllByRole} = render(<Grid gameState={initialState} />);

  const cells = getAllByRole('status', {live: 'polite'});

  expect(cells.length).toBe(9);
});
// update cell on click

// cell not updated on click if game is won
