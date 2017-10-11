import React from 'react';
import { func } from 'prop-types';
import classnames from 'classnames';
import { propType } from 'graphql-anywhere';
import './TodoItem.scss';
import { TodoRemoveButtonWithMutation } from '../../components/TodoRemoveButton/TodoRemoveButton'
import TodoToggleButton from '../TodoToggleButton/TodoToggleButton';
import TodoItemFragment from './TodoItem.fragment.gql';
const TodoItem =
  ({
    // props
    todo,

    // events
    onToggleTodo

  }) => (
      <div className={classnames("TodoItem", `TodoItem--${todo.state}`)}>
        <TodoToggleButton state={todo.state} />
        <div className="TodoItem__title">{todo.title}</div>
        <TodoRemoveButtonWithMutation id={todo.id} />
      </div>
    );

TodoItem.propTypes = {
  todo: propType(TodoItemFragment).isRequired,
  onToggleTodo: func,
};

TodoItem.defaultProps = {
  todo: {},
  onToggleTodo: undefined,
};

export default TodoItem;
