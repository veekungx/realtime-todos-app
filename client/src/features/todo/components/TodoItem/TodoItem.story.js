import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TodoItem from './TodoItem';

const buildStory = (attrs) => {
  const todo = {
    id: Math.round(Math.random() * 1000000),
    title: 'Hello World',
    updatedAt: Date.now(),
    ...attrs,
  };

  const props = {
    todo,
  };

  const handlers = {
    onToggleTodo: action('onToggleTodo'),
  };

  return <TodoItem {...props} {...handlers} />;
};

storiesOf('TodoItem', module)
  .add('TODO_ACTIVE', () => buildStory({ state: 'TODO_ACTIVE' }))
  .add('TODO_COMPLETED', () => buildStory({ state: 'TODO_COMPLETED' }));
