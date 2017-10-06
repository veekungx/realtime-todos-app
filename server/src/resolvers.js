const resolvers = {
  Query: {
    todos: (root, args, context) => {
      return [];
    }
  }
};

module.exports = resolvers