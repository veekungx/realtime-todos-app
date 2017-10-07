import React from 'react';
import { shallow } from 'enzyme';
import TodoInput from './TodoInput';

describe('TodoInput', () => {
  it('should render');

  describe('Components', () => {
    it('should have placeholder on input', () => {
      const wrapper = shallow(<TodoInput />);
      expect(wrapper.find('.TodoInput__input').props().placeholder).toContain('What need to be done');
    });

    it('should have complete all todos button', () => {
      const wrapper = shallow(<TodoInput />);
      expect(wrapper.find('.TodoInput__completeAllButton').exists()).toEqual(true);
    });
  });

  describe('Events', () => {
    it('should handle onChangeText', () => {
      const handler = jest.fn();
      const wrapper = shallow(<TodoInput onChangeText={handler} />);
      wrapper.find('.TodoInput__input').simulate('change');
      expect(handler).toHaveBeenCalled();
    });

    it('should handle onCompleteAll', () => {
      const handler = jest.fn();
      const wrapper = shallow(<TodoInput onCompleteAll={handler} />);
      wrapper.find('.TodoInput__completeAllButton').simulate('click');
      expect(handler).toHaveBeenCalled();
      
    })
  });
});
