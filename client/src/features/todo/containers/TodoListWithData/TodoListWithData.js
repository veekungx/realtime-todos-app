import React from 'react';
import { gql, graphql } from 'react-apollo';
import TodoList from '../../components/TodoList/TodoList';

export const TODO_LIST_QUERY = gql`
  query TodoListWithData{
    todos {
      edges {
        node {
          id
          title
          state
        }
      }
    }
  }
`;

const queryOptions = {
  props({ data: { loading, error, todos } }) {
    if (loading) return { loading };
    if (error) return { error };
    return { todos };
  }
}

export default graphql(TODO_LIST_QUERY, queryOptions)(TodoList);
