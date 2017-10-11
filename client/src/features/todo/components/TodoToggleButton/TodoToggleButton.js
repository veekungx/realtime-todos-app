import React from 'react';
import { } from 'prop-types';

import './TodoToggleButton.scss';

const TodoToggleButton =
  ({
    // props

    // events
    onToggleTodo
  }) => (
      <button
        className="TodoToggleButton"
        onClick={onToggleTodo}
      />
    );

TodoToggleButton.propTypes = {};
TodoToggleButton.defaultProps = {};
export default TodoToggleButton;
