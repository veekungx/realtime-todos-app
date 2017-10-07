const { MockList } = require('graphql-tools');
const { connectionFromArray } = require('graphql-relay');
const casual = require('casual');

module.exports = {
  Todo: () => ({
    title: casual.sentence,
  }),
  TodoConnection: () => ({
    edges: () => new MockList([5, 20]),
  })
}