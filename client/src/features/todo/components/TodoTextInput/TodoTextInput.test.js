import React from 'react';
import { shallow } from 'enzyme';
import TodoTextInput from './TodoTextInput';

describe('TodoTextInput', () => {
  it('should render');

  describe('Components', () => {

    it('should have placeholder on input', () => {
      const wrapper = shallow(<TodoTextInput />);
      expect(wrapper.find('.TodoTextInput__textInput').props().placeholder).toContain('What needs to be done?');
    });

  });
  describe('Props', () => {

    it('should pass value to input', () => {
      const wrapper = shallow(<TodoTextInput value="Hello" />);
      expect(wrapper.find('.TodoTextInput__textInput').props().value).toEqual('Hello');
    });

  });

  describe('Events', () => {

    it('should handle onChangeText', () => {
      const handler = jest.fn();
      const wrapper = shallow(<TodoTextInput onChangeText={handler} />);
      wrapper.find('.TodoTextInput__textInput').simulate('change', { target: { value: 'hello' } });
      expect(handler).toHaveBeenCalledWith('hello');
    });

    it('should handle onSubmit', () => {
      const handler = jest.fn();
      const wrapper = shallow(<TodoTextInput
        value="hi"
        onChangeText={jest.fn()}
        onSubmit={handler}
      />);

      wrapper.find('.TodoTextInput__form').simulate('submit', { preventDefault: jest.fn() });
      expect(handler).toHaveBeenCalled();
    })

  });

});
