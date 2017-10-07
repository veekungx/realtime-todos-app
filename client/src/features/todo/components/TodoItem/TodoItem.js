import React from 'react';
import { string, func, shape } from 'prop-types';
import classnames from 'classnames';

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

TodoItem.propTypes = {
  todo: shape({
    title: string,
  }),
  onDeleteTodo: func,
  onToggleTodo: func,
};
TodoItem.defaultProps = {
  todo: {},
  onDeleteTodo: undefined,
  onToggleTodo: undefined,
};
export default TodoItem;