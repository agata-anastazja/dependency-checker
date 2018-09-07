import React from 'react';
import DependencyTreeContainer from '../components/DependencyTreeContainer';
import { shallow } from 'enzyme';

describe('DependencyTree', () => {
  it('renders without crashing', () => {
    fetch.mockResponseOnce(JSON.stringify({"accepts":"~1.3.5","array-flatten":"1.1.1","body-parser":"1.18.2" }))
    shallow(<DependencyTreeContainer />);
  });

  it('renders loading until the data gets back', () => {
    const wrapper = shallow(<DependencyTreeContainer />, {disableLifecycleMethods: true});
    expect(wrapper.find('div>div').first().text()).toBe('loading')
  });
});
