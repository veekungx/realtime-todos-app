import React from 'react';
import { bool, func } from 'prop-types';
import classnames from 'classnames';
import './TodoInput.scss';

import TodoTextInputWithCreateTodo from '../../containers/TodoTextInputWithCreateTodo/TodoTextInputWithCreateTodo';

const TodoInput =
  ({
    // props
    isCompleteAll,
    // events
    onCompleteAll,
  }) =>
    (
      <div className={classnames('TodoInput', { 'TodoInput--completeAll': isCompleteAll })}>
        <button
          className="TodoInput__completeAllButton"
          onClick={onCompleteAll}
        />
        <TodoTextInputWithCreateTodo />
      </div>
    );

TodoInput.propTypes = {
  isCompleteAll: bool,
  onCompleteAll: func,
};
TodoInput.defaultProps = {
  isCompleteAll: false,
  onCompleteAll: undefined,
};
export default TodoInput;
