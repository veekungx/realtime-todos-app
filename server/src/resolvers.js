const { connectionFromArray } = require('graphql-relay');

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
    createTodo: (root, args, context) => {
      return {
        id: '1'
      }
    }
  }
};

module.exports = resolvers