const { globalIdResolver, connectionDefinitions } = require('graphql-relay-tools');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoModelSchema = Schema({
  title: String,
  state: String
});

const TodoModel = mongoose.model('Todo', TodoModelSchema);

const TodoSchema = `
  enum TodoState {
    TODO_ALL
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

  type TodoEdge {
    cursor: String!
    node: Todo
  }

  type TodoConnection {
    totalCount: Int!
    edges: [TodoEdge]
    pageInfo: PageInfo!
  }
`;

const TodoResolver = {
  Todo: {
    id: globalIdResolver()
  },
  TodoConnection: {
    totalCount: (conn) => conn.edges.length,
  }
}
module.exports = {
  TodoModel,
  TodoSchema,
  TodoResolver,
}