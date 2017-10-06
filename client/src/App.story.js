import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import App from './App';

storiesOf('App', module)
  .add('App', () => <App />)