import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TodoPagination from './TodoPagination';

const props = {};
const events = {
  onPrevPage: action('onPrevPage'),
  onPerPage: action('onPerPage'),
  onNextPage: action('onNextPage'),
};

storiesOf('TodoPagination', module)
  .add('Default', () => <TodoPagination {...props} {...events} />);
