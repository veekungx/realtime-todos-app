import React from 'react';
import { shallow } from 'enzyme';
import Todo from './Todo';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../../components/TodoList/TodoList';
import TodoFooter from '../TodoFooter/TodoFooter';


const mockData = {
  data: {
    todos: {
      edges: []
    }
  }
};

describe('Todo', () => {
  it('should contains TodoList, TodoInput, TodoFooter', () => {
    const wrapper = shallow(<Todo />);
    expect(wrapper.containsAllMatchingElements([
      <TodoInput />,
      <TodoList />,
      <TodoFooter />,
    ])).toEqual(true);
  });

  describe('Props', () => {
    it('should render loading', () => {
      const wrapper = shallow(<Todo data={{ loading: true }} />);
      expect(wrapper.find('withStyles(LinearProgress)').exists()).toEqual(true);
    });

    it('should render error', () => {
      const wrapper = shallow(<Todo data={{ error: new Error('foo') }} />);
      expect(wrapper.find('.Todo__error').exists()).toEqual(true);
    });
  });

  describe('Events', () => {
    it('should handle onDeleteTodo', () => {
      const handler = jest.fn();
      const wrapper = shallow(<Todo onDeleteTodo={handler} />);
      wrapper.find('TodoList').props().onDeleteTodo();
      expect(handler).toHaveBeenCalled();
    });
    it('should handle onToggleTodo', () => {
      const handler = jest.fn();
      const wrapper = shallow(<Todo onToggleTodo={handler} />);
      wrapper.find('TodoList').props().onToggleTodo();
      expect(handler).toHaveBeenCalled();
    });
  });
});
