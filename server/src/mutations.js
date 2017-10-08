const {
  mutationWithClientMutationId,
  offsetToCursor
 } = require('graphql-relay-tools');

const { TodoModel } = require('./models');


const {
  mutationType,
  mutationField,
  mutationResolver
} = mutationWithClientMutationId({
    name: "CreateTodo",
    inputFields: `
      title: String!
    `,
    outputFields: `
      todo: Todo
      edge: TodoEdge
    `,
    mutateAndGetPayload: async (args, context) => {

      const { title } = args;
      const newTodo = new TodoModel({ title, state: "TODO_ACTIVE" });
      await newTodo.save();
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
  mutationType,
  mutationField,
  mutationResolver
}