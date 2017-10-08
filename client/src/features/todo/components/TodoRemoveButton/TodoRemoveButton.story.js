import React from 'react';
import { storiesOf } from '@storybook/react'; 
import { action } from '@storybook/addon-actions';
import TodoRemoveButton from './TodoRemoveButton';

const props = {};
const events = {};

storiesOf('TodoRemoveButton',module)
  .add('Default',()=> <TodoRemoveButton {...props} {...events}/>);
