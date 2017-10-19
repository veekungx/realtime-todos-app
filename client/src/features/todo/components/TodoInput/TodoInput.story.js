import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TodoInput from './TodoInput';


const props = {
  text: '',
};

const events = {
  onChangeText: action('onChangeText'),
  onCompleteAll: action('onCompleteAll'),
};

storiesOf('TodoInput', module)
  .add('default', () => <TodoInput {...props} {...events} />)
  .add('all todos completed', () => <TodoInput {...props} isCompleteAll {...events} />);
