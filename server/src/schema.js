const { makeExecutableSchema } = require('graphql-tools');
const { nodeInterface, pageInfoType } = require('graphql-relay-tools');

const { QuerySchema } = require('./types/Query');
const { MutationSchema } = require('./types/Mutation');
const { TodoSchema } = require('./types/Todo');

const { QueryResolver } = require('./types/Query');
const { TodoResolver } = require('./types/Todo');
const { NodeResolver } = require('./types/Node');
const { MutationResolver } = require('./types/Mutation');



const typeDefs = [
  nodeInterface,
  pageInfoType,
  TodoSchema,
  QuerySchema,
  MutationSchema,
];

const resolvers = Object.assign(
  {},
  NodeResolver,
  TodoResolver,
  QueryResolver,
  MutationResolver
);

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
})