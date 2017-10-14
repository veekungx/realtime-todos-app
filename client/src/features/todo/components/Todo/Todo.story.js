import React from 'react';
import { storiesOf } from '@storybook/react';
import Todo from './Todo';

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
  .add('default', () => <Todo {...props} {...events} />);
