import React from 'react';
import { func } from 'prop-types';
import classnames from 'classnames';
import { gql } from 'react-apollo';
import { propType } from 'graphql-anywhere';
import './TodoItem.scss';

import { TodoRemoveButtonWithMutation } from '../../components/TodoRemoveButton/TodoRemoveButton'
const TodoItem =
  ({
    // props
    todo,

    // events
    onToggleTodo

  }) => (
      <div className={classnames("TodoItem", `TodoItem--${todo.state}`)}>
        <button
          className="TodoItem__toggleButton"
          onClick={onToggleTodo}
        />
        <div className="TodoItem__title">{todo.title}</div>
        <TodoRemoveButtonWithMutation id={todo.id} />
      </div>
    );

TodoItem.fragment = gql`
  fragment TodoItem_todo on Todo{
    id
    title
    state
  }
`;

TodoItem.propTypes = {
  todo: propType(TodoItem.fragment).isRequired,
  onToggleTodo: func,
};
TodoItem.defaultProps = {
  todo: {},
  onToggleTodo: undefined,
};

export default TodoItem;
