import React from 'react';
import { number, func } from 'prop-types';

import './TodoFooter.scss';
import TodoCounter from '../TodoCounter/TodoCounter';
import TodoClearButtonWithClearCompletedTodos from '../../containers/TodoClearButtonWithClearCompletedTodos/TodoClearButtonWithClearCompletedTodos';
import TodoFilterButtonWithConnect from '../../containers/TodoFilterButtonWithConnect/TodoFilterButtonWithConnect';

const TodoFooter =
  ({
    // props
    counter,
    // events
    onClear
  }) => (
      <div className='TodoFooter'>
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
  onClear: func
};
TodoFooter.defaultProps = {
  counter: 0,
  onClear: undefined
};
export default TodoFooter;
