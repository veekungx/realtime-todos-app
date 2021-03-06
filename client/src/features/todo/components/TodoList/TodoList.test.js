import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './TodoList';
import { generateMockNodeTodo } from '../../../../helpers/generateMockTodo';

describe('TodoList', () => {
  describe('Props', () => {
    it('should render empty todos', () => {
      const todos = {
        edges: [],
      };
      const wrapper = shallow(<TodoList todos={todos} />);
      expect(wrapper.find('TodoItem').length).toEqual(0);
    });

    it('should render undefined todos', () => {
      const todos = undefined;
      const wrapper = shallow(<TodoList todos={todos} />);
      expect(wrapper.find('TodoItem').length).toEqual(0);
    });

    it('should render infomation when zero todos', () => {
      const text = "You don't have any item on todo list";
      const wrapper = shallow(<TodoList />);
      expect(wrapper.find('.TodoList__noData').text()).toContain(text);
    });

    it('should render todos', () => {
      const todos = {
        edges: [
          generateMockNodeTodo(),
          generateMockNodeTodo(),
        ],
      };
      const wrapper = shallow(<TodoList todos={todos} />).dive();
      expect(wrapper.find('TodoItem').length).toEqual(2);
    });

    it('should pass todo to TodoItem', () => {
      const mockTodo = generateMockNodeTodo();
      const todos = {
        edges: [mockTodo],
      };
      const wrapper = shallow(<TodoList todos={todos} />).dive();
      expect(wrapper.find('TodoItem').at(0).props().todo).toEqual(mockTodo.node);
    });
  });

  describe('Events', () => {
    it('should handle onDeleteTodo', () => {
      const handler = jest.fn();
      const mockTodo = generateMockNodeTodo();
      const todos = {
        edges: [mockTodo],
      };
      const wrapper = shallow(<TodoList todos={todos} onDeleteTodo={handler} />).dive();
      wrapper.find('TodoItem').at(0).props().onDeleteTodo();
      expect(handler).toHaveBeenCalledWith();
    });

    it('should handle onToggleTodo', () => {
      const handler = jest.fn();
      const mockTodo = generateMockNodeTodo();
      const todos = {
        edges: [mockTodo],
      };
      const wrapper = shallow(<TodoList todos={todos} onToggleTodo={handler} />).dive();
      wrapper.find('TodoItem').at(0).props().onToggleTodo();
      expect(handler).toHaveBeenCalledWith();
    });
  });
});
