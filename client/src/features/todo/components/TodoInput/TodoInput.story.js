import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TodoInput from './TodoInput';

storiesOf('TodoInput', module)
  .add('default', () => <TodoInput />)
  .add('has text', () => <TodoInput value="Some Text" />)
  .add('all todos completed', () => <TodoInput isCompleteAll />);
