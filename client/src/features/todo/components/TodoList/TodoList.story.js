import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TodoList from './TodoList';
import { generateMockNodeTodo } from '../../../../helpers/generateMockTodo';

const buildStory = (edges = []) => {
  const todos = { edges }

  const handlers = {
    onDeleteTodo: action('onDeleteTodo'),
    onToggleTodo: action('onToggleTodo'),
  }

  return <TodoList todos={todos} {...handlers} />
};

storiesOf('TodoList', module)
  .add('loading', () => <TodoList loading={true} />)
  .add('error', () => <TodoList error={new Error('Error Occurred!!!')} />)
  .add('all active', () => {
    const edges = [
      generateMockNodeTodo({ state: 'TODO_ACTIVE' }),
      generateMockNodeTodo({ state: 'TODO_ACTIVE' }),
      generateMockNodeTodo({ state: 'TODO_ACTIVE' }),
    ];
    return buildStory(edges);
  })
  .add('all completed', () => {
    const edges = [
      generateMockNodeTodo({ state: 'TODO_COMPLETED' }),
      generateMockNodeTodo({ state: 'TODO_COMPLETED' }),
      generateMockNodeTodo({ state: 'TODO_COMPLETED' }),
    ];
    return buildStory(edges);
  })
  .add('mix state', () => {
    const edges = [
      generateMockNodeTodo({ state: 'TODO_ACTIVE' }),
      generateMockNodeTodo({ state: 'TODO_COMPLETED' }),
      generateMockNodeTodo({ state: 'TODO_ACTIVE' }),
    ];
    return buildStory(edges);
  })
  .add('no data', () => buildStory())
