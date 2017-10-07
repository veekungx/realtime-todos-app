import React from 'react';
import { storiesOf } from '@storybook/react'; 
import { action } from '@storybook/addon-actions';
import Todo from './Todo';

const props = {};
const events = {};

storiesOf('Todo',module)
  .add('Default',()=> <Todo {...props} {...events}/>);
