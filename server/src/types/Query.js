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
      state: TodoState = TODO_ALL
      search: String = ""
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
      const fortune = response.data[0].fortune.message;
      return fortune;
    },
    todos: async (root, args) => {
      const { state, search } = args;
      let todos
      switch (state) {
        case "TODO_ALL":
          todos = await TodoModel.find({
            title: { $regex: search, $options: 'i' },
          }, null, { sort: { createdAt: -1 } });
          break;
        case "TODO_ACTIVE":
          todos = await TodoModel.find({
            title: { $regex: search, $options: 'i' },
            state: "TODO_ACTIVE",
          });
          break;
        case "TODO_COMPLETED":
          todos = await TodoModel.find({
            title: { $regex: search, $options: 'i' },
            state: "TODO_COMPLETED",
          });
          break;
        default:
          todos = await TodoModel.find({ title: { $regex: search, $options: 'i' } });
          break;
      }

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