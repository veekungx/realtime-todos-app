import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FortuneTeller from './FortuneTeller';

storiesOf('FortuneTeller', module)
  .add('open', () => <FortuneTeller fortune="Drink like a fish, water only." isOpen />)
