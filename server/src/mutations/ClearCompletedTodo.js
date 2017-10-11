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
      todos: [Todo]
      status: Boolean
      total: Int
    `,
    mutateAndGetPayload: async ({ clientMutationId }, context) => {
      const todos = await TodoModel.find({ state: 'TODO_COMPLETED' }).lean();
      await TodoModel.remove({ state: 'TODO_COMPLETED' });
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