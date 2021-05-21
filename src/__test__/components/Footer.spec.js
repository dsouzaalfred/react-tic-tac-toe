import React from 'react'
import renderer from 'react-test-renderer';

import { Footer } from '../../components/Footer';

it('Renders Cell correctly', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
