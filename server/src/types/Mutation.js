const { TodoModel } = require('./Todo');

const { CreateTodoResolver, CreateTodoField, CreateTodoType } = require('../mutations/CreateTodo');
const { RemoveTodoResolver, RemoveTodoField, RemoveTodoType } = require('../mutations/RemoveTodo');
const { ToggleTodoResolver, ToggleTodoField, ToggleTodoType } = require('../mutations/ToggleTodo');

const MutationSchema = `
  ${CreateTodoType}
  ${RemoveTodoType}
  ${ToggleTodoType}

  type Mutation{
    createTodo${CreateTodoField}
    removeTodo${RemoveTodoField}
    toggleTodo${ToggleTodoField}
  }
`;

const MutationResolver = {
  Mutation: {
    createTodo: CreateTodoResolver,
    removeTodo: RemoveTodoResolver,
    toggleTodo: ToggleTodoResolver
  }
}

module.exports = {
  MutationSchema,
  MutationResolver
}