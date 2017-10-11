import React from 'react';
import { bool, func, instanceOf } from 'prop-types';
import { propType } from 'graphql-anywhere';
import './TodoList.scss';
import TodoItem from '../TodoItem/TodoItem';
import TodoListFragment from './TodoList.fragment.gql';
const TodoList = (
  {
    // props
    todos,
    // events
    onToggleTodo,
    onDeleteTodo,
  }
) => {
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

TodoList.propTypes = {
  loading: bool,
  error: instanceOf(Error),
  todos: propType(TodoListFragment).isRequired,
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

// const queryOptions = {
//   props({ data: { loading, error, todos } }) {
//     if (loading) return { loading };
//     if (error) return { error };
//     return { todos };
//   }
// }

// export const TodoListWithData = graphql(TODO_LIST_QUERY, queryOptions)(TodoList);

