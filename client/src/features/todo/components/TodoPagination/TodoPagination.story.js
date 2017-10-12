import React from 'react';
import { storiesOf } from '@storybook/react'; 
import { action } from '@storybook/addon-actions';
import TodoPagination from './TodoPagination';

const props = {};
const events = {};

storiesOf('TodoPagination',module)
  .add('Default',()=> <TodoPagination {...props} {...events}/>);
