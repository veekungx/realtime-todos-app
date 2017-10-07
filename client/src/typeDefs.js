export default `
  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }

  type Query {
    todos(before: String, after: String, first: Int, last: Int): TodoConnection!
  }

  type Todo {
    id: ID!
    title: String!
    state: TodoState!
    createdAt: Float!
    updatedAt: Float!
  }

  type TodoConnection {
    pageInfo: PageInfo!
    edges: [TodoEdge]
    totalCount: Int!
  }

  type TodoEdge {
    node: Todo!
    cursor: String!
  }

  enum TodoState {
    TODO_ACTIVE
    TODO_COMPLETED
  }
`;