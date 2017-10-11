const { TodoModel } = require('../types/Todo');
const {
  mutationWithClientMutationId,
  offsetToCursor
 } = require('graphql-relay-tools');
const {
  mutationType: ClearCompletedTodoType,
  mutationField: ClearCompletedTodoField,
  mutationResolver: ClearCompletedTodoResolver
} = mutationWithClientMutationId({
    name: "ClearCompletedTodo",
    outputFields: `
      status: Boolean
      total: Int
    `,
    mutateAndGetPayload: async ({ clientMutationId }, context) => {
      const todos = await TodoModel.remove({ state: 'TODO_COMPLETED' });
      return {
        status: true,
        total: todos.result.n
      };
    }
  });


module.exports = {
  ClearCompletedTodoType,
  ClearCompletedTodoField,
  ClearCompletedTodoResolver
}