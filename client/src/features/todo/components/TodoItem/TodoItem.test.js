import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from './TodoItem';
import { generateMockTodo } from '../../../../helpers/generateMockTodo';

describe('TodoItem', () => {
  describe('Components', () => {
    it('should have toggle button', () => {
      const todo = generateMockTodo();
      const wrapper = shallow(<TodoItem todo={todo} />);
      expect(wrapper.find('TodoToggleButton').exists()).toEqual(true);
    });
  });

  describe('State', () => {
    it('should have TODO_ACTIVE state', () => {
      const todo = generateMockTodo({ state: "TODO_ACTIVE" });
      const wrapper = shallow(<TodoItem todo={todo} />);
      expect(wrapper.find('.TodoItem').hasClass('TodoItem--TODO_ACTIVE')).toEqual(true);
    });
    it('should have TODO_COMPLETED state', () => {
      const todo = generateMockTodo({ state: "TODO_COMPLETED" });
      const wrapper = shallow(<TodoItem todo={todo} />);
      expect(wrapper.find('.TodoItem').hasClass('TodoItem--TODO_COMPLETED')).toEqual(true);
    });
  });

  describe('Props', () => {
    it('should render title', () => {
      const todo = generateMockTodo({ title: "Hello World" });
      const wrapper = shallow(<TodoItem todo={todo} />);
      expect(wrapper.find('.TodoItem__title').text()).toEqual('Hello World');
    });
  });

  describe('Events', () => {

  });
});
