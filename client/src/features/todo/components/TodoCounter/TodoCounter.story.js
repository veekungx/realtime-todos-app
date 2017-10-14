import React from 'react';
import { storiesOf } from '@storybook/react';
import TodoCounter from './TodoCounter';

storiesOf('TodoCounter', module)
  .add('zero todos', () => <TodoCounter counter={0} />)
  .add('a todo', () => <TodoCounter counter={1} />)
  .add('2 or more todos', () => <TodoCounter counter={2} />);
