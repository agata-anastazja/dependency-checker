import React from 'react';
import DependencyTree from '../components/DependencyTree';
import { shallow } from 'enzyme'
describe('DependencyTree', () => {
  it('renders without crashing', () => {
    shallow(<DependencyTree />);
  });
});
