import React from 'react';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {Cell} from '../../components/Cell';

it('Renders Cell correctly', () => {
  const tree = renderer.create(<Cell />).toJSON();
  expect(tree).toMatchSnapshot();
});

// show empty cell
test('Is empty on initial load', () => {
  const {queryByRole} = render(
    <Cell id="c1" value={null} isWinningCell={false} />,
  );

  const cell = queryByRole('status', {live: 'polite'});
  expect(cell).toHaveClass('cell');
  expect(cell).toHaveTextContent('');
});
// show correct value on click
test('show correct value', () => {
  const {queryByRole} = render(
    <Cell id="c2" value="X" isWinningCell={false} />,
  );

  const cell = queryByRole('status', {live: 'polite'});
  expect(cell).toHaveClass('cell');
  expect(cell).toHaveTextContent('X');
});
// Add class if winner
test('Add class if winner', () => {
  const {queryByRole} = render(<Cell id="c3" value="0" isWinningCell={true} />);

  const cell = queryByRole('status', {live: 'polite'});
  expect(cell).toHaveClass('cell winner');
  expect(cell).toHaveTextContent('0');
});
