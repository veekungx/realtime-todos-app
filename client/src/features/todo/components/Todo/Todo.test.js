import React from 'react';
import { shallow } from 'enzyme';
import Todo from './Todo';
import TodoInput from '../TodoInput/TodoInput';
import TodoListWithData from '../../containers/TodoListWithData/TodoListWithData';
import TodoFooter from '../TodoFooter/TodoFooter';

describe('Todo', () => {
  it('should contains TodoList, TodoInput, TodoFooter', () => {
    const wrapper = shallow(<Todo />);
    expect(wrapper.containsAllMatchingElements([
      <TodoInput />,
      <TodoListWithData />,
      <TodoFooter />,
    ])).toEqual(true);
  });

  describe('Props', () => {

  });

  describe('Events', () => {

  });
});
