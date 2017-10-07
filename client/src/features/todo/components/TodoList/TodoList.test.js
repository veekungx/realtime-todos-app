import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './TodoList';
import TodoItem from '../TodoItem/TodoItem'
import generateMockTodo from '../../../../helpers/generateMockTodo';

describe('TodoList', () => {

  describe('Props', () => {

    it('should render todos', () => {
      const todos = {
        edges: [
          generateMockTodo(),
          generateMockTodo()
        ]
      };
      const wrapper = shallow(<TodoList todos={todos} />);
      expect(wrapper.find('TodoItem').length).toEqual(2);
    });

    it('should pass todo to TodoItem', () => {
      const mockTodo = generateMockTodo();
      const todos = {
        edges: [mockTodo]
      };
      const wrapper = shallow(<TodoList todos={todos} />);
      expect(wrapper.find('TodoItem').at(0).props().todo).toEqual(mockTodo);
    });
  });

  describe('Events', () => {

    it('should handle onDeleteTodo', () => {
      const handler = jest.fn();
      const mockTodo = generateMockTodo();
      const todos = {
        edges: [mockTodo]
      };
      const wrapper = shallow(<TodoList todos={todos} onDeleteTodo={handler} />)
      wrapper.find('TodoItem').at(0).props().onDeleteTodo();
      expect(handler).toHaveBeenCalled();
    });

    it('should handle onToggleTodo', () => {
      const handler = jest.fn();
      const mockTodo = generateMockTodo();
      const todos = {
        edges: [mockTodo]
      };
      const wrapper = shallow(<TodoList todos={todos} onToggleTodo={handler} />)
      wrapper.find('TodoItem').at(0).props().onToggleTodo();
      expect(handler).toHaveBeenCalled();
    });
  })
});
