const { TodoModel } = require('../types/Todo');
const {
  mutationWithClientMutationId,
  offsetToCursor
 } = require('graphql-relay-tools');
const pubsub = require('../pubsub');
const {
  mutationType: ClearCompletedTodoType,
  mutationField: ClearCompletedTodoField,
  mutationResolver: ClearCompletedTodoResolver
} = mutationWithClientMutationId({
    name: "ClearCompletedTodo",
    outputFields: `
      todos: [Todo]
      status: Boolean
      total: Int
    `,
    mutateAndGetPayload: async ({ clientMutationId }, context) => {
      const todos = await TodoModel.find({ state: 'TODO_COMPLETED' });
      await TodoModel.remove({ state: 'TODO_COMPLETED' });
      todos.map(todo => {
        pubsub.publish('Todo', {
          Todo: {
            mutation: "DELETED",
            node: todo,
            edges: {
              node: todo
            }
          }
        })
      });

      return {
        todos,
        status: true,
        total: todos.length
      };
    }
  });


module.exports = {
  ClearCompletedTodoType,
  ClearCompletedTodoField,
  ClearCompletedTodoResolver
}