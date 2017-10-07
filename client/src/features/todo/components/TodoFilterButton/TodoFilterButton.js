import React from 'react';
import { } from 'prop-types';
import classnames from 'classnames';

import './TodoFilterButton.scss';

const TodoFilterButton =
  ({
    // props
    label,
    isSelected,
    children,
    // events
    onSelect
  }) => (
      <button
        className={classnames('TodoFilterButton', { 'TodoFilterButton--selected': isSelected })}
        onClick={onSelect}
      >
        {label || children}
      </button>
    );

TodoFilterButton.propTypes = {};
TodoFilterButton.defaultProps = {};
export default TodoFilterButton;
