const { connectionFromArray } = require('graphql-relay');
const resolvers = {
  Query: {
    todos: (root, args, context) => {
      // return connectionFromArray([], args);
    }
  }
};

module.exports = resolvers