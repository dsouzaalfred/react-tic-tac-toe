import React from 'react';
import renderer from 'react-test-renderer';

import {Grid} from '../../components/Grid';
import {initialState} from '../../constants';

it('Renders Cell correctly', () => {
  const tree = renderer.create(<Grid gameState={initialState} />).toJSON();
  expect(tree).toMatchSnapshot();
});
