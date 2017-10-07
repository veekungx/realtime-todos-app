import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TodoInput from './TodoInput';

const events = {
  onChangeText: action('onChangeText'),
  onCompleteAll: action('onCompleteAll'),
}

storiesOf('TodoInput', module)
  .add('default', () => <TodoInput {...events} />)
  .add('has text', () => <TodoInput value="Some Text" {...events} />)
  .add('all todos completed', () => <TodoInput isCompleteAll {...events} />);
