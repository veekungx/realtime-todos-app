import React from 'react';

import './Todo.scss';
import TodoInput from '../TodoInput/TodoInput';
import TodoFooter from '../TodoFooter/TodoFooter';

import { TodoListWithData } from '../../components/TodoList/TodoList';

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
