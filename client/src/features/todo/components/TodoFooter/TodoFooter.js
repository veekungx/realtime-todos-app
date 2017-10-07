import React from 'react';
import { } from 'prop-types';

import './TodoFooter.scss';
import TodoFilterButton from '../TodoFilterButton/TodoFilterButton';
import TodoCounter from '../TodoCounter/TodoCounter';

const TodoFooter =
  ({
    // events
    onClear
  }) => (
      <div className='TodoFooter'>
        
        <TodoCounter />
        <TodoFilterButton label="All" />
        <TodoFilterButton label="Active" />
        <TodoFilterButton label="Completed" />

        <button
          className="TodoFooter__clearButton"
          onClick={onClear}
        >
          Clear Completed
        </button>
      </div>
    );

TodoFooter.propTypes = {};
TodoFooter.defaultProps = {};
export default TodoFooter;
