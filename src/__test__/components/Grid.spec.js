import React from 'react'
import renderer from 'react-test-renderer';

import { Grid } from '../../components/Grid';
import { initalSate } from '../../constants';

it('Renders Cell correctly', () => {
  const tree = renderer.create(<Grid gameState={initalSate} />).toJSON();
  expect(tree).toMatchSnapshot();
});
