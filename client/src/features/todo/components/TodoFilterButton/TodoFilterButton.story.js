import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TodoFilterButton from './TodoFilterButton';

const buildStory = (attrs) => {
  const props = {
    label: 'Hello',
    ...attrs,
  };

  const handlers = {
    onSelect: action('onSelect'),
  };

  return <TodoFilterButton {...props} {...handlers} />;
};

storiesOf('TodoFilterButton', module)
  .add('default', () => buildStory())
  .add('selected', () => buildStory({ label: 'Selected', isSelected: true }));
