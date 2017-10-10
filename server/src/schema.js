const { makeExecutableSchema } = require('graphql-tools');
const {
  nodeInterface,
  nodeField,
  nodesField,
  pageInfoType,
  connectionDefinitions,
  connectionArgs,
  mutationWithClientMutationId,
} = require('graphql-relay-tools');

const resolvers = require('./resolvers');
const { connectionType: TodoConnectionType } = connectionDefinitions({ name: "Todo" });
const { createTodoField, createTodoType } = require('./mutations');

const typeDefs = `
  enum TodoState {
    TODO_ACTIVE
    TODO_COMPLETED
  }

  type Todo implements Node{
    id: ID!
    title: String!
    state: TodoState!
    createdAt: Float!
    updatedAt: Float!
  }

  type Query{
    fortune : String
    todos${connectionArgs()}: TodoConnection!
    ${nodeField}
    ${nodesField}
  }

  type Mutation{
    createTodo${createTodoField}
    removeTodo(id: ID!): Todo
  }
`
module.exports = makeExecutableSchema({
  typeDefs: [
    nodeInterface,
    pageInfoType,
    TodoConnectionType,
    createTodoType,
    typeDefs,
  ], resolvers
})