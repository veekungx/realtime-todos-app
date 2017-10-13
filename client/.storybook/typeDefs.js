export default `
  input ClearCompletedTodoInput {
    clientMutationId: String
  }

  type ClearCompletedTodoPayload {
    todos: [Todo]
    status: Boolean
    total: Int
    clientMutationId: String
  }

  input CreateTodoInput {
    title: String!
    clientMutationId: String
  }

  type CreateTodoPayload {
    todo: Todo
    edge: TodoEdge
    clientMutationId: String
  }

  enum ModelMutation {
    CREATED
    UPDATED
    DELETED
  }

  type Mutation {
    createTodo(input: CreateTodoInput!): CreateTodoPayload
    removeTodo(input: RemoveTodoInput!): RemoveTodoPayload
    toggleTodo(input: ToggleTodoInput!): ToggleTodoPayload
    clearCompletedTodos(input: ClearCompletedTodoInput!): ClearCompletedTodoPayload
  }

  # An object with an ID
  interface Node {
    # The id of the object.
    id: ID!
  }

  # Information about pagination in a connection.'
  type PageInfo {
    # When paginating forwards, the cursor to continue.
    endCursor: String

    # When paginating forwards, are there more items?
    hasNextPage: Boolean!

    # When paginating backwards, are there more items?
    hasPreviousPage: Boolean!

    # When paginating backwards, the cursor to continue.
    startCursor: String
  }

  type Query {
    fortune: String
    todos(state: TodoState = TODO_ALL, search: String = "", first: Int, last: Int, after: String, before: String): TodoConnection!
    node(id: ID!): Node
    nodes(ids: [ID!]!): [Node]!
  }

  input RemoveTodoInput {
    id: ID!
    clientMutationId: String
  }

  type RemoveTodoPayload {
    todo: Todo
    edge: TodoEdge
    clientMutationId: String
  }

  type Subscription {
    Todo(filter: TodoSubscriptionFilter): TodoSubscriptionPayload
    todoAdded: Todo
    todoRemove: Todo
  }

  type Todo implements Node {
    id: ID!
    title: String!
    state: TodoState!
    createdAt: Float!
    updatedAt: Float!
  }

  type TodoConnection {
    totalCount: Int!
    edges: [TodoEdge]
    pageInfo: PageInfo!
  }

  type TodoEdge {
    cursor: String!
    node: Todo
  }

  enum TodoState {
    TODO_ALL
    TODO_ACTIVE
    TODO_COMPLETED
  }

  input TodoSubscriptionFilter {
    mutation_in: [ModelMutation]
  }

  type TodoSubscriptionPayload {
    mutation: ModelMutation!
    node: Todo
    edge: TodoEdge
  }

  input ToggleTodoInput {
    id: ID!
    clientMutationId: String
  }

  type ToggleTodoPayload {
    todo: Todo
    edge: TodoEdge
    clientMutationId: String
  }
`