const { TodoModel } = require('./Todo');

const {
  CreateTodoResolver,
  CreateTodoField,
  CreateTodoType,
} = require('../mutations/CreateTodo');

const {
  RemoveTodoResolver,
  RemoveTodoField,
  RemoveTodoType,
} = require('../mutations/RemoveTodo');

const MutationSchema = `
  ${CreateTodoType}
  ${RemoveTodoType}

  type Mutation{
    createTodo${CreateTodoField}
    removeTodo${RemoveTodoField}
  }
`;

const MutationResolver = {
  Mutation: {
    createTodo: CreateTodoResolver,
    removeTodo: RemoveTodoResolver
  }
}

module.exports = {
  MutationSchema,
  MutationResolver
}