import React from 'react';
import { shallow } from 'enzyme';
import TodoToggleButton from './TodoToggleButton';

describe('TodoToggleButton', () => {
  it('should render');

  describe('State', () => {
    it('should have TODO_ACTIVE state', () => {
      const wrapper = shallow(<TodoToggleButton state="TODO_ACTIVE" />);
      expect(wrapper.find('.TodoToggleButton').hasClass('TodoToggleButton--TODO_ACTIVE')).toEqual(true);
    });
    it('should have TODO_COMPLETED state', () => {
      const wrapper = shallow(<TodoToggleButton state="TODO_COMPLETED" />);
      expect(wrapper.find('.TodoToggleButton').hasClass('TodoToggleButton--TODO_COMPLETED')).toEqual(true);
    });
  });
  describe('Events', () => {
    const handler = jest.fn();
    const wrapper = shallow(<TodoToggleButton onToggleTodo={handler} />);
    wrapper.find('.TodoToggleButton').simulate('click');
    expect(handler).toHaveBeenCalled();
  });
});
