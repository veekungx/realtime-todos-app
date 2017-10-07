import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from './TodoItem';
import generateMockTodo from '../../../../helpers/generateMockTodo';

describe('TodoItem', () => {
  describe('Components', () => {
    it('should have delete button', () => {
      const todo = generateMockTodo();
      const wrapper = shallow(<TodoItem todo={todo} />);
      expect(wrapper.find('.TodoItem__deleteButton').exists()).toEqual(true);
    });
    it('should have toggle button', () => {
      const todo = generateMockTodo();
      const wrapper = shallow(<TodoItem todo={todo} />);
      expect(wrapper.find('.TodoItem__toggleButton').exists()).toEqual(true);
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
    it('should handle onDeleteTodo', () => {
      const handler = jest.fn();
      const todo = generateMockTodo();
      const wrapper = shallow(<TodoItem todo={todo} onDeleteTodo={handler} />);
      wrapper.find('.TodoItem__deleteButton').simulate('click');
      expect(handler).toHaveBeenCalled();
    });
    it('should handle onToggleTodo', () => {
      const handler = jest.fn();
      const todo = generateMockTodo();
      const wrapper = shallow(<TodoItem todo={todo} onToggleTodo={handler} />);
      wrapper.find('.TodoItem__toggleButton').simulate('click');
      expect(handler).toHaveBeenCalled();
    });
  });
});
