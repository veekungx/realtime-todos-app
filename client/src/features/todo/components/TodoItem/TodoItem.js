import React from 'react';
import { func, object } from 'prop-types';
import classnames from 'classnames';
import { propType } from 'graphql-anywhere';
import './TodoItem.scss';
import TodoItemFragment from './TodoItem.fragment.gql';

const TodoItem =
  ({
    // props
    todo,
    style,
    // events
    onToggleTodo,
    onDeleteTodo,
  }) =>
    (
      <div
        className={classnames('TodoItem', `TodoItem--${todo.state}`)}
        style={style}
      >
        <button
          className="TodoItem__toggleButton"
          onClick={() => onToggleTodo(todo)}
        />
        <div className={classnames('TodoItem__title', { 'TodoItem__title--adding': todo.id === -1 })}>
          {todo.title}
          {todo.id === -1 && <span className="TodoItem__status" >Creating</span>}
        </div>
        <button
          className="TodoItem__deleteButton"
          onClick={() => onDeleteTodo(todo)}
        />
      </div >
    );

TodoItem.propTypes = {
  todo: propType(TodoItemFragment).isRequired,
  style: object,
  onToggleTodo: func,
  onDeleteTodo: func,
};

TodoItem.defaultProps = {
  style: {},
  onToggleTodo: undefined,
  onDeleteTodo: undefined,
};

export default TodoItem;
