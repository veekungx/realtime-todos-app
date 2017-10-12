const { TodoModel } = require('../types/Todo');
const {
  mutationWithClientMutationId,
  offsetToCursor,
  fromGlobalId
 } = require('graphql-relay-tools');
const pubsub = require('../pubsub');

const {
  mutationType: RemoveTodoType,
  mutationField: RemoveTodoField,
  mutationResolver: RemoveTodoResolver
} = mutationWithClientMutationId({
    name: "RemoveTodo",
    inputFields: `
      id: ID!
    `,
    outputFields: `
      todo: Todo
      edge: TodoEdge
    `,
    mutateAndGetPayload: async ({ id, clientMutationId }, context) => {
      const todo = fromGlobalId(id);
      const result = await TodoModel.findByIdAndRemove(todo.id);
      pubsub.publish('Todo', {
        Todo: {
          mutation: 'DELETED',
          node: result,
          edge: {
            node: result
          }
        }
      })
      return result
        ? {
          todo: result,
          edge: {
            cursor: offsetToCursor(result.id),
            node: result
          }
        }
        : null
    }
  });


module.exports = {
  RemoveTodoType,
  RemoveTodoField,
  RemoveTodoResolver
}