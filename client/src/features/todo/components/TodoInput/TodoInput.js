import React from 'react';
import { } from 'prop-types';

import './TodoInput.scss';

const TodoInput =
  ({
    // props
    value,
    // events
    onChangeText,
    onCompleteAll,
  }) => (
      <div className="TodoInput">
        <button
          className="TodoInput__completeAllButton"
          onClick={onCompleteAll}
        />
        <input
          type="text"
          value={value}
          placeholder="What needs to be done?"
          className="TodoInput__textInput"
          onChange={onChangeText}
        />
      </div>
    );

TodoInput.propTypes = {};
TodoInput.defaultProps = {};
export default TodoInput;
