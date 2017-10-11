const { TodoModel } = require('../types/Todo');
const {
  mutationWithClientMutationId,
  offsetToCursor,
  fromGlobalId
 } = require('graphql-relay-tools');
const {
  mutationType: ToggleTodoType,
  mutationField: ToggleTodoField,
  mutationResolver: ToggleTodoResolver
} = mutationWithClientMutationId({
    name: "ToggleTodo",
    inputFields: `
      id: ID!
    `,
    outputFields: `
      todo: Todo
      edge: TodoEdge
    `,
    mutateAndGetPayload: async ({ id, clientMutationId }) => {
      const { id: todoId } = fromGlobalId(id);
      const todo = await TodoModel.findById(todoId);
      todo.state = todo.state === "TODO_ACTIVE"
        ? "TODO_COMPLETED"
        : "TODO_ACTIVE";
      await todo.save();
      return {
        todo,
        edge: {
          cursor: offsetToCursor(todo.id),
          node: todo
        }
      };
    }
  });


module.exports = {
  ToggleTodoType,
  ToggleTodoField,
  ToggleTodoResolver
}