import React from 'react';
import { number } from 'prop-types';

import './TodoFooter.scss';
import TodoCounter from '../TodoCounter/TodoCounter';
import TodoClearButtonWithClearCompletedTodos from '../../containers/TodoClearButtonWithClearCompletedTodos/TodoClearButtonWithClearCompletedTodos';
import TodoFilterButtonWithConnect from '../../containers/TodoFilterButtonWithConnect/TodoFilterButtonWithConnect';

const TodoFooter =
  ({
    // props
    counter,
  }) =>
    (
      <div className="TodoFooter">
        <div className="TodoFooter__section">
          <TodoCounter counter={counter} />
        </div>
        <div className="TodoFooter__section">
          <TodoFilterButtonWithConnect filter="TODO_ALL" label="All" />
          <TodoFilterButtonWithConnect filter="TODO_ACTIVE" label="Active" />
          <TodoFilterButtonWithConnect filter="TODO_COMPLETED" label="Completed" />
        </div>
        <div className="TodoFooter__section">
          <TodoClearButtonWithClearCompletedTodos />
        </div>
      </div>
    );

TodoFooter.propTypes = {
  counter: number,
};
TodoFooter.defaultProps = {
  counter: 0,
};
export default TodoFooter;
