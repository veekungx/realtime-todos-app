import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Todo from './Todo';

const props = {
  data: {
    todos: {
      edges: []
    }
  }
};
const events = {};

storiesOf('Todo', module)
  .add('loading', () => <Todo data={{ loading: true }} />)
  .add('error', () => <Todo data={{ error: new Error('Error Occurred!!!') }} />)
  .add('default', () => <Todo {...props} {...events} />);
