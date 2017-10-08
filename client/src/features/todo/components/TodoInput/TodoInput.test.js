import React from 'react';
import { shallow } from 'enzyme';
import TodoInput from './TodoInput';

describe('TodoInput', () => {
  it('should render');

  describe('Components', () => {

    it('should have complete all todos button', () => {
      const wrapper = shallow(<TodoInput />);
      expect(wrapper.find('.TodoInput__completeAllButton').exists()).toEqual(true);
    });

  });

  describe('Props', () => {


    it('should have state complete on complate all button', () => {
      const wrapper = shallow(<TodoInput isCompleteAll />);
      expect(wrapper.find('.TodoInput').hasClass('TodoInput--completeAll')).toEqual(true);
    });

  });

  describe('Events', () => {

    it('should handle onCompleteAll', () => {
      const handler = jest.fn();
      const wrapper = shallow(<TodoInput onCompleteAll={handler} />);
      wrapper.find('.TodoInput__completeAllButton').simulate('click');
      expect(handler).toHaveBeenCalled();
    })

  });
});
