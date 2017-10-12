const { makeExecutableSchema } = require('graphql-tools');
const { nodeInterface, pageInfoType } = require('graphql-relay-tools');

const { QuerySchema, QueryResolver } = require('./types/Query');
const { TodoSchema, TodoResolver } = require('./types/Todo');
const { NodeResolver } = require('./types/Node');
const { MutationSchema, MutationResolver } = require('./types/Mutation');
const { SubscriptionSchema, SubscriptionResolver } = require('./types/Subscription');

console.log(SubscriptionSchema)
console.log(SubscriptionResolver)
const typeDefs = [
  nodeInterface,
  pageInfoType,
  TodoSchema,
  QuerySchema,
  MutationSchema,
  SubscriptionSchema
];

const resolvers = Object.assign(
  {},
  NodeResolver,
  TodoResolver,
  QueryResolver,
  MutationResolver,
  SubscriptionResolver
);

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
})