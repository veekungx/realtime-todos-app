import React from 'react';
import { string, bool, func, node } from 'prop-types';
import classnames from 'classnames';

import './TodoFilterButton.scss';

const TodoFilterButton =
  ({
    // props
    label,
    filter,
    isSelected,
    children,
    // events
    onSelect,
  }) =>
    (
      <button
        className={classnames('TodoFilterButton', { 'TodoFilterButton--selected': isSelected })}
        onClick={() => onSelect(filter)}
      >
        {label || children}
      </button>
    );

TodoFilterButton.propTypes = {
  label: string,
  filter: string,
  isSelected: bool,
  children: node,
  onSelect: func,
};
TodoFilterButton.defaultProps = {
  label: '',
  filter: '',
  isSelected: false,
  children: null,
  onSelect: undefined,
};
export default TodoFilterButton;
