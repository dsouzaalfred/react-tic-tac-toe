import React from 'react';
import renderer from 'react-test-renderer';

import {Cell} from '../../components/Cell';

it('Renders Cell correctly', () => {
  const tree = renderer.create(<Cell />).toJSON();
  expect(tree).toMatchSnapshot();
});
