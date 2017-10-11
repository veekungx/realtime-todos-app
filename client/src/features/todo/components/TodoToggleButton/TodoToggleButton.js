import React from 'react';
import { string, func } from 'prop-types';
import classnames from 'classnames';
import './TodoToggleButton.scss';

const TodoToggleButton =
  ({
    // props
    state,
    // events
    onToggleTodo
  }) => (
      <button
        className={classnames("TodoToggleButton", `TodoToggleButton--${state}`)}
        onClick={onToggleTodo}
      />
    );

TodoToggleButton.propTypes = {
  state: string,
  onToggleTodo: func,

};

TodoToggleButton.defaultProps = {
  state: "",
  onToggleTodo: undefined,
};

export default TodoToggleButton;
