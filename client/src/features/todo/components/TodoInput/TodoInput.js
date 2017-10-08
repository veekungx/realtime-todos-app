import React from 'react';
import { string, func } from 'prop-types';
import classnames from 'classnames';
import './TodoInput.scss';

import TodoTextInputWithMutation from '../../containers/TodoTextInputWithMutation/TodoTextInputWithMutation';

const TodoInput =
  ({
    // props
    isCompleteAll,
    // events
    onCompleteAll,
  }) => (
      <div className={classnames('TodoInput', { 'TodoInput--completeAll': isCompleteAll })}>
        <button
          className="TodoInput__completeAllButton"
          onClick={onCompleteAll}
        />

        <TodoTextInputWithMutation />

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
