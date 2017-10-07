import React from 'react';
import { shallow } from 'enzyme';
import Todo from './Todo';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import TodoFooter from '../TodoFooter/TodoFooter';

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
    
  });

  describe('Events', () => {
    
  });
});
