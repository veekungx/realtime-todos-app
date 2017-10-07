const { MockList } = require('graphql-tools');
const { connectionFromArray } = require('graphql-relay');
const casual = require('casual');

module.exports = {
  Todo: () => ({
    title: casual.sentence,
    state: casual.random_element(['TODO_ACTIVE', 'TODO_COMPLETED']),
  }),
  TodoConnection: () => ({
    edges: () => new MockList([5, 20]),
  })
}