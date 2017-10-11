import React from 'react';
import { } from 'prop-types';

import './TodoClearButton.scss';

const TodoClearButton =
  ({
    // events
    onClear
  }) => (
      <button
        className="TodoClearButton"
        onClick={onClear}
      >
        Clear Completed
      </button>
    );

TodoClearButton.propTypes = {};
TodoClearButton.defaultProps = {};
export default TodoClearButton;
