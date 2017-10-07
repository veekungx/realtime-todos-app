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

        <div className="TodoFooter__section">
          <TodoCounter />
        </div>
        <div className="TodoFooter__section">
          <TodoFilterButton label="All" />
          <TodoFilterButton label="Active" />
          <TodoFilterButton label="Completed" />
        </div>
        <div className="TodoFooter__section">
          <button
            className="TodoFooter__clearButton"
            onClick={onClear}
          >
            Clear Completed
          </button>
        </div>

      </div>
    );

TodoFooter.propTypes = {};
TodoFooter.defaultProps = {};
export default TodoFooter;
