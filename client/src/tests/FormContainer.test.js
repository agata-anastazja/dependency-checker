import React from 'react';
import FormContainer from '../components/FormContainer';
import { mount } from 'enzyme';

describe('FormContainer', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<FormContainer />);
    expect(wrapper.find('DependencyTreeContainer').length).toBe(1)
  });
});
