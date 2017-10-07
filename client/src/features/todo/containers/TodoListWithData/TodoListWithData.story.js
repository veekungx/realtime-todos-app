import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TodoListWithData from './TodoListWithData';

storiesOf('TodoListWithData')
  .add('default', () => <TodoListWithData />)