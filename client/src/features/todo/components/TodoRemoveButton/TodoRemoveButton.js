import React from 'react';
import { } from 'prop-types';

import './TodoRemoveButton.scss';

const TodoRemoveButton =
  ({
    // props
    id,

    // events
    onDeleteTodo
  }) => (
      <button
        className="TodoRemoveButton"
        onClick={() => {
          onDeleteTodo({ variables: { id } })
        }}
      />
    );

TodoRemoveButton.propTypes = {};
TodoRemoveButton.defaultProps = {};
export default TodoRemoveButton;
