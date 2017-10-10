const { globalIdResolver, connectionDefinitions } = require('graphql-relay-tools');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoModelSchema = Schema({
  title: String,
  state: String
});

const TodoModel = mongoose.model('Todo', TodoModelSchema);

const { connectionType: TodoConnectionType } = connectionDefinitions({ name: "Todo" });

const TodoSchema = `
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

  ${TodoConnectionType}
`;

const TodoResolver = {
  Todo: {
    id: globalIdResolver()
  },
}
module.exports = {
  TodoModel,
  TodoSchema,
  TodoResolver,
}