import React from 'react';
import DependencyTree from '../components/DependencyTree';
import { shallow, mount } from 'enzyme'
describe('DependencyTree', () => {
  it('renders as many dependencies as there are in the list', () => {
    const dependencies = {"accepts":"~1.3.5","array-flatten":"1.1.1","body-parser":"1.18.2" }
    const wrapper = shallow(<DependencyTree data={dependencies} />)
    expect(wrapper.find("TreeView").length).toBe(3)

  });

  it('dependency name is displayed by default but not the version', () => {
    const dependencies = {"accepts":"~1.3.5"}
    const wrapper = mount(<DependencyTree data={dependencies} />)
    expect(wrapper.find("TreeView").first().text()).toBe("accepts")
    expect(wrapper.find("TreeView").first().text()).not.toBe("~1.3.5")

  });

  it('dependency version displays on click', () => {
    const dependencies = {"accepts":"~1.3.5"}
    const wrapper = mount(<DependencyTree data={dependencies} />)
    const label = wrapper.find('label').first()
    label.simulate('click')
    expect(wrapper.find("TreeView").first().text()).toBe("accepts~1.3.5")
  });
});
