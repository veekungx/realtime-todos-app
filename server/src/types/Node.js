const NodeResolver = {
  Node: {
    __resolveType(obj) {
      if (obj.title) return 'Todo';
      return null;
    }
  },
}

module.exports = {
  NodeResolver
}