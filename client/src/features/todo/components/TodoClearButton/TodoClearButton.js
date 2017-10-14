import React from 'react';
import { func } from 'prop-types';

import './TodoClearButton.scss';

const TodoClearButton =
  ({
    // events
    onClear,
  }) =>
    (
      <button
        className="TodoClearButton"
        onClick={onClear}
      >
        Clear Completed
      </button>
    );

TodoClearButton.propTypes = {
  onClear: func,
};
TodoClearButton.defaultProps = {
  onClear: undefined,
};
export default TodoClearButton;
