import React from 'react';
import DependencyTree from '../components/DependencyTree';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  fetch.mockResponseOnce(JSON.stringify({"accepts":"~1.3.5","array-flatten":"1.1.1","body-parser":"1.18.2" }))
  shallow(<DependencyTree />);
});
