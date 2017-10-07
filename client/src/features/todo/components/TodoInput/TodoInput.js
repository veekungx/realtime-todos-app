import React from 'react';
import { string, func } from 'prop-types';
import classnames from 'classnames';
import './TodoInput.scss';

const TodoInput =
  ({
    // props
    value,
    isCompleteAll,
    // events
    onChangeText,
    onCompleteAll,
  }) => (
      <div className={classnames('TodoInput', { 'TodoInput--completeAll': isCompleteAll })}>
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

TodoInput.propTypes = {
  value: string,
  onChangeText: func,
  onCompleteAll: func,
};
TodoInput.defaultProps = {
  value: '',
  onChangeText: undefined,
  onCompleteAll: undefined,
};
export default TodoInput;
