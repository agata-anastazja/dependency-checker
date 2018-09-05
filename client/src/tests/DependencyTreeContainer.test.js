import React from 'react';
import DependencyTreeContainer from '../components/DependencyTreeContainer';
import { shallow } from 'enzyme';

describe('DependencyTree', () => {
  it('renders without crashing', () => {
    fetch.mockResponseOnce(JSON.stringify({"accepts":"~1.3.5","array-flatten":"1.1.1","body-parser":"1.18.2" }))
    shallow(<DependencyTreeContainer />);
  });

  it('TODO: passes data from server to dependency tree component', () => {
    fetch.mockResponseOnce(JSON.stringify({"accepts":"~1.3.5","array-flatten":"1.1.1","body-parser":"1.18.2" }))
    shallow(<DependencyTreeContainer />);
  });
});
