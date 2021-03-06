const { TodoModel } = require('../types/Todo');
const {
  mutationWithClientMutationId,
  offsetToCursor
 } = require('graphql-relay-tools');
const pubsub = require('../pubsub');

const {
  mutationType: CreateTodoType,
  mutationField: CreateTodoField,
  mutationResolver: CreateTodoResolver
} = mutationWithClientMutationId({
    name: "CreateTodo",
    inputFields: `
      title: String!
    `,
    outputFields: `
      todo: Todo
      edge: TodoEdge
    `,
    mutateAndGetPayload: async ({ title, clientMutationId }, context) => {
      const newTodo = new TodoModel({ title, state: "TODO_ACTIVE", createdAt: new Date() });
      await newTodo.save();
      pubsub.publish('Todo', {
        Todo: {
          mutation: 'CREATED',
          node: newTodo,
          edge: {
            node: newTodo
          }
        }
      })
      return {
        todo: newTodo,
        edge: {
          cursor: offsetToCursor(newTodo.id),
          node: newTodo
        }
      };
    }
  });


module.exports = {
  CreateTodoType,
  CreateTodoField,
  CreateTodoResolver
}