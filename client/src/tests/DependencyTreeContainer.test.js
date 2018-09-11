import React from 'react';
import DependencyTreeContainer from '../components/DependencyTreeContainer';
import { shallow, mount } from 'enzyme';

describe('DependencyTreeContainer', () => {
  it('fetches data from server', async () => {
    const mockResponse = (JSON.stringify({"data": {"accepts":"~1.3.5","array-flatten":"1.1.1","body-parser":"1.18.2" }}))
    fetch.mockResponse(mockResponse);
    var wrapper = mount(<DependencyTreeContainer packageName="" />);
    wrapper.setProps({
      packageName: "express"
    });
    wrapper = wrapper.update();
    expect(wrapper.state('response')).toEqual(mockResponse['data'])
  });

  it('renders dependency tree after successful call to API', () => {
    const mockResponse = (JSON.stringify({"accepts":"~1.3.5","array-flatten":"1.1.1","body-parser":"1.18.2" }))
    var wrapper = mount(<DependencyTreeContainer />);
    wrapper.setState({ response: mockResponse });
    expect(wrapper.find('DependencyTree').length).toBe(1);
    expect(wrapper.find('DependencyTree').prop('data')).toBe(mockResponse);
  });

  it('renders loading until the data gets back', () => {
    const wrapper = shallow(<DependencyTreeContainer />, {disableLifecycleMethods: true});
    expect(wrapper.find('div>div').first().text()).toBe('loading')
  });
});
