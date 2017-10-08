const axios = require('axios');
const { connectionFromArray } = require('graphql-relay');
const { TodoModel } = require('./models');
const resolvers = {
  Query: {
    fortune: async () => {
      const response = await axios.get('http://fortunecookieapi.herokuapp.com/v1/cookie');
      const fortune = response.data[0].fortune.message;
      return fortune;
    },
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
    createTodo: async (root, { title }) => {
      const newTodo = new TodoModel({ title, state: "TODO_ACTIVE" });
      const savedTodo = await newTodo.save();
      return savedTodo;
    },
    removeTodo: async (root, { id }) => {
      const result = await TodoModel.findByIdAndRemove(id);
      return result
        ? Object.assign({}, result, { id: result._id })
        : null
    }
  }
};

module.exports = resolvers