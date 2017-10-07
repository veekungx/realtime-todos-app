import { configure, addDecorator } from '@storybook/react';
import apolloStorybookDecorator from 'apollo-storybook-decorator';
import typeDefs from '../src/typeDefs';

addDecorator(
  apolloStorybookDecorator({ typeDefs, mocks: {} })
);

const req = require.context("../src", true, /\.story\.js$/);
const loadStories = () => {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
