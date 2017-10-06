import React from 'react';
import { storiesOf } from '@storybook/react'; 
import { action } from '@storybook/addon-actions';
import TodoItem from "./TodoItem";

const props = {};
const events = {};

storiesOf("TodoItem",module)
  .add("Default",()=> <TodoItem {...props} {...events}/>);
