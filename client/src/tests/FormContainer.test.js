import React from 'react';
import FormContainer from '../components/FormContainer';
import { mount } from 'enzyme';

describe('FormContainer', () => {
  // it('calls to server with the dependency name to retrieve dependencies', () => {
  //   fetch.mockResponseOnce(JSON.stringify({"accepts":"~1.3.5","array-flatten":"1.1.1","body-parser":"1.18.2" }))

  //   const wrapper = mount(<FormContainer />);
  //   const textbox = wrapper.find('input').first();
  //   textbox.simulate('change', {target: {value: "klopsik"}});
  //   const button = wrapper.find('button').first();
  //   button.simulate('click')
  // //  const dependency_container = wrapper.find('DependencyTreeContainer');
  //   expect(fetch).toBeCalledWith("https://http://localhost:5000/api/klopsik")

  // });

  it('has dependency tree component and dependency form', () =>{
    const wrapper = mount(<FormContainer />);
    expect(wrapper.find('DependencyTreeContainer').length).toBe(1);
    expect(wrapper.find('DependencyForm').length).toBe(1);

  });
});
