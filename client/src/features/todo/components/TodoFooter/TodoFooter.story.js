import React from 'react';
import { storiesOf } from '@storybook/react'; 
import { action } from '@storybook/addon-actions';
import TodoFooter from './TodoFooter';

const props = {};
const events = {};

storiesOf('TodoFooter',module)
  .add('Default',()=> <TodoFooter {...props} {...events}/>);
