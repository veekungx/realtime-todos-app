import React from 'react';
import { bool, func, arrayOf, shape, instanceOf } from 'prop-types';
import { gql, graphql } from 'react-apollo';
import { propType } from 'graphql-anywhere';
import './TodoList.scss';
import TodoItem from '../TodoItem/TodoItem';
import { LinearProgress } from 'material-ui/Progress';

const TodoList = (
  {
    // props
    loading,
    error,
    todos,
    // events
    onToggleTodo,
    onDeleteTodo,
  }
) => {
  if (loading) return <LinearProgress />;
  if (error) return <div className="TodoList__error">{error.toString()}</div>;
  if (!todos.edges.length) {
    return (
      <div className="TodoList__noData">
        You don't have any item on todo list. Try to add one.
      </div>
    );
  }
  return (
    <div className="TodoList">
      {todos.edges.map(({ node }) =>
        <TodoItem
          key={node.id}
          todo={node}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />)
      }
    </div>
  );
}

TodoList.fragment = gql`
  fragment TodoList_todos on TodoConnection{
    edges{
      node{
        ...TodoItem_todo
      }
    }
  }
  ${TodoItem.fragment}
`;

TodoList.propTypes = {
  loading: bool,
  error: instanceOf(Error),
  todos: shape({
    edges: arrayOf(shape({
      node: propType(TodoItem.fragment)
    })).isRequired
  }),
  onDeleteTodo: func,
  onToggleTodo: func,
};

TodoList.defaultProps = {
  loading: false,
  error: undefined,
  todos: {
    edges: []
  },
  onDeleteTodo: undefined,
  onToggleTodo: undefined,
};

export default TodoList;

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

export const TodoListWithData = graphql(TODO_LIST_QUERY, queryOptions)(TodoList);

