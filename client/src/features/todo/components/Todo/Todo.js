import React from 'react';
import { } from 'prop-types';

import './Todo.scss';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import TodoFooter from '../TodoFooter/TodoFooter';

const Todo = () => (
  <div className='Todo'>
    <TodoInput />
    <TodoList />
    <TodoFooter />
  </div>
);

Todo.propTypes = {};
Todo.defaultProps = {};
export default Todo;
