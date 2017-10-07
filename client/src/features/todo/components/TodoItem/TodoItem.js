import React from 'react';
import { string, func, shape } from 'prop-types';
import classnames from 'classnames';
import { gql } from 'react-apollo';
import { propType } from 'graphql-anywhere';
import './TodoItem.scss';

const TodoItem =
  ({
    // props
    todo,

    // events
    onDeleteTodo,
    onToggleTodo

  }) => (
      <div className={classnames("TodoItem", `TodoItem--${todo.state}`)}>
        <button
          className="TodoItem__toggleButton"
          onClick={onToggleTodo}
        />
        <div className="TodoItem__title">{todo.title}</div>
        <button
          className="TodoItem__deleteButton"
          onClick={onDeleteTodo}
        />
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
  onDeleteTodo: func,
  onToggleTodo: func,
};
TodoItem.defaultProps = {
  todo: {},
  onDeleteTodo: undefined,
  onToggleTodo: undefined,
};

export default TodoItem;
