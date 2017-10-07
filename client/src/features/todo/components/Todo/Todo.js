import React from 'react';
import { } from 'prop-types';

import './Todo.scss';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import TodoFooter from '../TodoFooter/TodoFooter';

import TodoListWithData from '../../containers/TodoListWithData/TodoListWithData';

const Todo = () => (
  <div className='Todo'>
    <div className="Todo__title">
      REAL-TIME TODOS
    </div>
    <div className="Todo__container">
      <TodoInput />
      <TodoListWithData />
      <TodoFooter />
    </div>
  </div>
);

Todo.propTypes = {};
Todo.defaultProps = {};

export default Todo;
