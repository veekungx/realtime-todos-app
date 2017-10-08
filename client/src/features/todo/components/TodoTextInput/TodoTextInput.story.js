import React from 'react';
import { storiesOf } from '@storybook/react'; 
import { action } from '@storybook/addon-actions';
import TodoTextInput from './TodoTextInput';

const props = {};
const events = {};

storiesOf('TodoTextInput',module)
  .add('Default',()=> <TodoTextInput {...props} {...events}/>);
