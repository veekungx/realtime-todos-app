import React from 'react';
import { storiesOf } from '@storybook/react';
import Todo from './Todo';
import { generateMockNodeTodo } from '../../../../helpers/generateMockTodo';

const props = {
  filter: '',
  text: '',
  data: {
    todos: {
      edges: [],
    },
  },
};
const events = {};

storiesOf('Todo', module)
  .add('loading', () => <Todo data={{ loading: true }} />)
  .add('error', () => <Todo data={{ error: new Error('Error Occurred!!!') }} />)
  .add('with data', () => <Todo {...props} {...events} data={{
    todos: {
      edges: [
        generateMockNodeTodo(),
        generateMockNodeTodo({ state: "TODO_COMPLETED" }),
        generateMockNodeTodo(),
        generateMockNodeTodo({ state: "TODO_COMPLETED" }),
        generateMockNodeTodo(),
      ]
    }
  }} />)
  .add('no data', () => <Todo {...props} {...events} />);
