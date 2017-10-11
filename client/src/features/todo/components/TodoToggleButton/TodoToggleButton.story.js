import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TodoToggleButton from './TodoToggleButton';

const events = {
  onToggleTodo: action('onToggleTodo'),
};

storiesOf('TodoToggleButton', module)
  .add('TODO_ACTIVE', () => <TodoToggleButton state="TODO_ACTIVE" {...events} />)
  .add('TODO_COMPLETED', () => <TodoToggleButton state="TODO_COMPLETED" {...events} />);
