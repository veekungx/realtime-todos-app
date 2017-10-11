import React from 'react';
import { number, func } from 'prop-types';

import './TodoFooter.scss';
import TodoFilterButton from '../TodoFilterButton/TodoFilterButton';
import TodoCounter from '../TodoCounter/TodoCounter';
import TodoClearButtonWithClearCompletedTodos from '../../containers/TodoClearButtonWithClearCompletedTodos/TodoClearButtonWithClearCompletedTodos';

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
          <TodoFilterButton label="All" />
          <TodoFilterButton label="Active" />
          <TodoFilterButton label="Completed" />
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
