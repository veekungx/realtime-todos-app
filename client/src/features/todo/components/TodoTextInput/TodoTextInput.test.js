import React from 'react';
import { shallow } from 'enzyme';
import TodoTextInput from './TodoTextInput';

describe('TodoTextInput', () => {
  it('should render');

  it('should pass value to input', () => {
    const wrapper = shallow(<TodoTextInput value="Hello" />);
    expect(wrapper.find('.TodoTextInput__textInput').props().value).toEqual('Hello');
  });

  it('should have placeholder on input', () => {
    const wrapper = shallow(<TodoTextInput />);
    expect(wrapper.find('.TodoTextInput__textInput').props().placeholder).toContain('What needs to be done?');
  });

  it('should handle onChangeText', () => {
    const handler = jest.fn();
    const wrapper = shallow(<TodoTextInput onChangeText={handler} />);
    wrapper.find('.TodoTextInput__textInput').simulate('change');
    expect(handler).toHaveBeenCalled();
  });

});
