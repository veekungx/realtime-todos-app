const { expect } = require('chai');
const { Query } = require('./resolvers');

describe('Resolvers', () => {
  describe('Query', () => {
    it('should return todos', () => {
      const todos = Query.todos();
      expect(todos).to.eql([]);
    });
  });
});