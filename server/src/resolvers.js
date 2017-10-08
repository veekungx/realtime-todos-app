const axios = require('axios');
const { connectionFromArray, globalIdField } = require('graphql-relay');
const { TodoModel } = require('./models');
const mongoose = require('mongoose');
const {
  nodeDefinitions,
  fromGlobalId,
  globalIdResolver,
} = require('graphql-relay-tools');
const { mutationResolver } = require('./mutations');
const { nodeResolver, nodesResolver } = nodeDefinitions((globalId) => {
  const { type, id } = fromGlobalId(globalId);
  if (type === "Todo") {
    return TodoModel.findById(id);
  }
});

const resolvers = {
  Node: {
    __resolveType(obj) {
      if (obj.title) return 'Todo';
      return null;
    }
  },
  Query: {
    fortune: async () => {
      const response = await axios.get('http://fortunecookieapi.herokuapp.com/v1/cookie');
      const fortune = response.data[0].fortune.message;
      return fortune;
    },
    todos: async (root, args, { models: { TodoModel } }) => {
      const todos = await TodoModel.find();
      return connectionFromArray(todos, args);
    },
    node: nodeResolver,
    nodes: nodesResolver
  },
  Todo: {
    id: globalIdResolver()
  },
  Mutation: {
    // createTodo: async (root, { title }) => {
    //   const newTodo = new TodoModel({ title, state: "TODO_ACTIVE" });
    //   const savedTodo = await newTodo.save();
    //   return savedTodo;
    // },
    createTodo: mutationResolver,
    removeTodo: async (root, { id }) => {
      const result = await TodoModel.findByIdAndRemove(id);
      return result
        ? Object.assign({}, result, { id: result._id })
        : null
    }
  }
};

module.exports = resolvers