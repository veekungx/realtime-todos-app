import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TodoTextInput from './TodoTextInput';

const events = {
  onChangeText: action('onChangeText'),
};

storiesOf('TodoTextInput', module)
  .add('Default', () => <TodoTextInput {...events} />);
