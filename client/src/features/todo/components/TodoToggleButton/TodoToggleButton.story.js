import React from 'react';
import { storiesOf } from '@storybook/react'; 
import { action } from '@storybook/addon-actions';
import TodoToggleButton from './TodoToggleButton';

const props = {};
const events = {};

storiesOf('TodoToggleButton',module)
  .add('Default',()=> <TodoToggleButton {...props} {...events}/>);
