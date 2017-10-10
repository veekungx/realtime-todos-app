const axios = require('axios');
const { connectionFromArray, nodeDefinitions, fromGlobalId } = require('graphql-relay-tools');
const { TodoModel } = require('./Todo');

const { nodeResolver, nodesResolver } = nodeDefinitions((globalId) => {
  const { type, id } = fromGlobalId(globalId);
  if (type === "Todo") {
    return TodoModel.findById(id);
  }
});

const QuerySchema = `
  type Query{
    fortune : String
    todos(
      first: Int
      last: Int
      after: String
      before: String
    ): TodoConnection!
    node(id: ID!): Node
    nodes(ids: [ID!]!): [Node]!
  }
`

const QueryResolver = {
  Query: {
    fortune: async () => {
      const response = await axios.get('http://fortunecookieapi.herokuapp.com/v1/cookie');
      const fortune = response.data.fortune.message;
      return fortune;
    },
    todos: async (root, args) => {
      const todos = await TodoModel.find();
      return connectionFromArray(todos, args);
    },
    node: nodeResolver,
    nodes: nodesResolver
  }
}


module.exports = {
  QuerySchema,
  QueryResolver,
}