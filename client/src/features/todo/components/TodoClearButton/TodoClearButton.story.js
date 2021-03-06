import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TodoClearButton from './TodoClearButton';

const props = {};
const events = {
  onClear: action('onClear'),
};

storiesOf('TodoClearButton', module)
  .add('Default', () => <TodoClearButton {...props} {...events} />);
