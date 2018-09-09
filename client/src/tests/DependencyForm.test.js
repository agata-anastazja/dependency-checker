import React from 'react';
import DependencyForm from '../components/DependencyForm';
import { mount } from 'enzyme';

describe('DependencyForm', () => {
  it('displays user input in text box', () => {
    const wrapper = mount(<DependencyForm />);
    var textbox = wrapper.find('input').first();
    textbox.simulate('change', {target: {value: "klopsik"}})
    textbox = wrapper.find('input').first();
    expect(textbox.props().value).toBe("klopsik");
  });
});
