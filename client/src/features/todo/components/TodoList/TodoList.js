import React from 'react';
import { func, arrayOf, shape } from 'prop-types';
import { gql } from 'react-apollo';
import { propType } from 'graphql-anywhere';
import './TodoList.scss';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = (
  {
    // props
    todos,
    // events
    onToggleTodo,
    onDeleteTodo,
  }
) => (
    <div className="TodoList">
      
      {!todos.edges.length &&
        <div className="TodoList__noData">
          You don't have any item on todo list. Try to add one.
        </div>
      }

      {todos.edges.map(todo =>
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />)
      }
    </div>
  );

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
  todos: shape({
    edges: arrayOf(propType(TodoItem.fragment)).isRequired
  }),
  onDeleteTodo: func,
  onToggleTodo: func,
};

TodoList.defaultProps = {
  todos: {
    edges: []
  },
  onDeleteTodo: undefined,
  onToggleTodo: undefined,
};

export default TodoList;
