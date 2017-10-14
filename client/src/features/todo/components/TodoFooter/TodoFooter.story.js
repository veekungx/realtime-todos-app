import React from 'react';
import { storiesOf } from '@storybook/react';
import TodoFooter from './TodoFooter';

const props = {};
const events = {};

storiesOf('TodoFooter', module)
  .add('Default', () => <TodoFooter {...props} {...events} />);
