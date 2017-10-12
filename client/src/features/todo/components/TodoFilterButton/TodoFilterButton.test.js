import React from 'react';
import { shallow } from 'enzyme';
import TodoFilterButton from './TodoFilterButton';

describe('TodoFilterButton', () => {

  describe('State', () => {
    it('should render isSelected state', () => {
      const wrapper = shallow(<TodoFilterButton isSelected />);
      expect(wrapper.find('.TodoFilterButton').hasClass('TodoFilterButton--selected')).toEqual(true);
    });
  });

  describe('Props', () => {
    it('should render label', () => {
      const wrapper = shallow(<TodoFilterButton label="Hello" />);
      expect(wrapper.find('.TodoFilterButton').text()).toContain('Hello');
    });
    it('should render children', () => {
      const wrapper = shallow(<TodoFilterButton>Hello</TodoFilterButton>);
      expect(wrapper.find('.TodoFilterButton').text()).toContain('Hello');
    });
  });

  describe('Events', () => {
    it('should handle onSelect', () => {
      const handler = jest.fn();
      const wrapper = shallow(<TodoFilterButton filter="TODO_ALL" onSelect={handler} />);

      wrapper.find('.TodoFilterButton').simulate('click');
      expect(handler).toHaveBeenCalledWith("TODO_ALL");
    });
  });
});
