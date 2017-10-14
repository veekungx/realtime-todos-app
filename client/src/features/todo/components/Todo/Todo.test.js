import React from 'react';
import { shallow } from 'enzyme';
import Todo from './Todo';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../../components/TodoList/TodoList';
import TodoFooter from '../TodoFooter/TodoFooter';

const mockTodos = {
  edges: [],
};

describe('Todo', () => {
  it('should contains TodoList, TodoInput, TodoFooter', () => {
    const wrapper = shallow(<Todo data={{ todos: mockTodos }} />);
    expect(wrapper.containsAllMatchingElements([
      <TodoInput />,
      <TodoList />,
      <TodoFooter />,
    ])).toEqual(true);
  });

  describe('Props', () => {
    it('should render loading', () => {
      const wrapper = shallow(<Todo data={{ loading: true, todos: mockTodos }} />);
      expect(wrapper.find('withStyles(LinearProgress)').exists()).toEqual(true);
    });

    it('should render error', () => {
      const wrapper = shallow(<Todo data={{ error: new Error('foo'), todos: mockTodos }} />);
      expect(wrapper.find('.Todo__error').exists()).toEqual(true);
    });
  });

  describe('Events', () => {
    it('should handle onDeleteTodo', () => {
      const handler = jest.fn();
      const wrapper = shallow(<Todo data={{ todos: mockTodos }} onDeleteTodo={handler} />);
      wrapper.find('TodoList').props().onDeleteTodo();
      expect(handler).toHaveBeenCalled();
    });
    it('should handle onToggleTodo', () => {
      const handler = jest.fn();
      const wrapper = shallow(<Todo data={{ todos: mockTodos }} onToggleTodo={handler} />);
      wrapper.find('TodoList').props().onToggleTodo();
      expect(handler).toHaveBeenCalled();
    });
  });
});
