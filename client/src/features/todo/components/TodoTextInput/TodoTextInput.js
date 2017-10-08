import React from 'react';
import { string, func } from 'prop-types';

import './TodoTextInput.scss';

const TodoTextInput =
  ({
    // props
    value,

    // events
    onChangeText,
    onSubmit

  }) => (
      <div className="TodoTextInput">
        <form
          className="TodoTextInput__form"
          onSubmit={async (e) => {
            if (!value) return;
            e.preventDefault();
            await onSubmit({
              variables: { title: value },
              optimisticResponse: {
                createTodo: {
                  id: -1,
                  title: value,
                }
              }
            });
            onChangeText('');
          }}
        >
          <input
            className="TodoTextInput__textInput"
            type="text"
            value={value}
            placeholder="What needs to be done?"
            onChange={e => onChangeText(e.target.value)}
          />
        </form>
      </div>
    );

TodoTextInput.propTypes = {
  value: string,
  onChangeText: func,
  onSubmit: func,
};

TodoTextInput.defaultProps = {
  value: '',
  onChangeText: undefined,
  onSubmit: undefined,
};

export default TodoTextInput;
