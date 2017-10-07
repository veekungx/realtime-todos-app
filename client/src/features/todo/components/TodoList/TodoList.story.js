import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TodoList from './TodoList';
import generateMockTodo from '../../../../helpers/generateMockTodo';

const buildStory = (edges = []) => {
  const todos = { edges }

  const handlers = {
    onDeleteTodo: action('onDeleteTodo'),
    onToggleTodo: action('onToggleTodo'),
  }

  return <TodoList todos={todos} {...handlers} />
};

storiesOf('TodoList', module)
  .add('all active', () => {
    const edges = [
      generateMockTodo({ state: 'TODO_ACTIVE' }),
      generateMockTodo({ state: 'TODO_ACTIVE' }),
      generateMockTodo({ state: 'TODO_ACTIVE' }),
    ];
    return buildStory(edges);
  })
  .add('all completed', () => {
    const edges = [
      generateMockTodo({ state: 'TODO_COMPLETED' }),
      generateMockTodo({ state: 'TODO_COMPLETED' }),
      generateMockTodo({ state: 'TODO_COMPLETED' }),
    ];
    return buildStory(edges);
  })
  .add('mix state', () => {
    const edges = [
      generateMockTodo({ state: 'TODO_ACTIVE' }),
      generateMockTodo({ state: 'TODO_COMPLETED' }),
      generateMockTodo({ state: 'TODO_ACTIVE' }),
    ];
    return buildStory(edges);
  })
  .add('no data', () => buildStory())
