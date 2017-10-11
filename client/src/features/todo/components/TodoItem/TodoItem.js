import React from 'react';
import { func } from 'prop-types';
import classnames from 'classnames';
import { propType } from 'graphql-anywhere';
import './TodoItem.scss';
import TodoItemFragment from './TodoItem.fragment.gql';
const TodoItem =
  ({
    // props
    todo,

    // events
    onToggleTodo,
    onDeleteTodo,
  }) => (
      <div className={classnames("TodoItem", `TodoItem--${todo.state}`)}>
        <button
          className="TodoItem__toggleButton"
          onClick={() => onToggleTodo(todo)}
        />
        <div className="TodoItem__title">{todo.title}</div>
        <button
          className="TodoItem__deleteButton"
          onClick={() => onDeleteTodo(todo)}
        />
      </div>
    );

TodoItem.propTypes = {
  todo: propType(TodoItemFragment).isRequired,
  onToggleTodo: func,
  onDeleteTodo: func,
};

TodoItem.defaultProps = {
  todo: {},
  onToggleTodo: undefined,
  onDeleteTodo: undefined,
};

export default TodoItem;
