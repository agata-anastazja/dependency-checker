import React from 'react';
import FormContainer from '../components/FormContainer';
import { mount } from 'enzyme';

describe('FormContainer', () => {
  it('has dependency tree component and dependency form', () =>{
    const wrapper = mount(<FormContainer packageName="Express"/>);
    expect(wrapper.find('DependencyTreeContainer').length).toBe(1);
    expect(wrapper.find('DependencyForm').length).toBe(1);
  });
});
