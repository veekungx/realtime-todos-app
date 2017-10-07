import React from 'react';
import { gql, graphql } from 'react-apollo';
import TodoList from '../../components/TodoList/TodoList';

const query = gql`
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

export default graphql(query, queryOptions)(TodoList);
