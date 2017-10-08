const { connectionFromArray } = require('graphql-relay');
const { TodoModel } = require('./models');
const resolvers = {
  Query: {
    todos: async (root, args, { models: { TodoModel } }) => {
      const todos = await TodoModel.find().lean();
      return connectionFromArray(todos, args);
    }
  },
  Todo: {
    id: (root) => {
      return root._id;
    }
  },
  Mutation: {
    createTodo: async (root, { title }, context) => {
      const newTodo = new TodoModel({ title, state: "TODO_ACTIVE" });
      await newTodo.save();
      return Object.assign({}, newTodo, { id: newTodo._id.toString() });
    }
  }
};

module.exports = resolvers