const { TodoModel } = require('./Todo');

const { CreateTodoResolver, CreateTodoField, CreateTodoType } = require('../mutations/CreateTodo');
const { RemoveTodoResolver, RemoveTodoField, RemoveTodoType } = require('../mutations/RemoveTodo');
const { ToggleTodoResolver, ToggleTodoField, ToggleTodoType } = require('../mutations/ToggleTodo');
const { ClearCompletedTodoResolver, ClearCompletedTodoField, ClearCompletedTodoType } = require('../mutations/ClearCompletedTodo');

const MutationSchema = `
  ${CreateTodoType}
  ${RemoveTodoType}
  ${ToggleTodoType}
  ${ClearCompletedTodoType}

  type Mutation{
    createTodo${CreateTodoField}
    removeTodo${RemoveTodoField}
    toggleTodo${ToggleTodoField}
    clearCompletedTodo${ClearCompletedTodoField}
  }
`;

const MutationResolver = {
  Mutation: {
    createTodo: CreateTodoResolver,
    removeTodo: RemoveTodoResolver,
    toggleTodo: ToggleTodoResolver,
    clearCompletedTodo: ClearCompletedTodoResolver,
  }
}

module.exports = {
  MutationSchema,
  MutationResolver
}