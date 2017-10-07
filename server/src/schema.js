const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
  enum TodoState {
    TODO_ACTIVE
    TODO_COMPLETED
  }
  type PageInfo{
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }

  type Todo {
    id: ID!
    title: String!
    state: TodoState!
    createdAt: Float!
    updatedAt: Float!
  }

  type TodoEdge{
    node: Todo!
    cursor: String!
  }

  type TodoConnection{
    pageInfo: PageInfo!
    edges: [TodoEdge]
    totalCount: Int!
  }

  type Query{
    todos(
      before: String,
      after: String,
      first: Int,
      last: Int
    ): TodoConnection!
  }
`

module.exports = makeExecutableSchema({ typeDefs, resolvers })