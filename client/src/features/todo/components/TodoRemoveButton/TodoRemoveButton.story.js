import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TodoRemoveButton from './TodoRemoveButton';

const props = {
  id: "1"
};
const events = {
  onDeleteTodo: action('onDeleteTodo')
};

storiesOf('TodoRemoveButton', module)
  .add('Default', () => <TodoRemoveButton {...props} {...events} />);
