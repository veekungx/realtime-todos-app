import React from 'react';
import { bool, func, instanceOf } from 'prop-types';
import { propType } from 'graphql-anywhere';
import './TodoList.scss';
import TodoItem from '../TodoItem/TodoItem';
import TodoListFragment from './TodoList.fragment.gql';

import { TransitionMotion, spring, presets } from 'react-motion';

const getDefaultStyles = (todos) => {
  return todos.edges.map(({ node }) => ({
    key: node.id,
    data: node,
    style:
    {
      height: 0,
      opacity: 1
    }
  }));
};

const getStyles = (todos) => {
  return todos.edges.map(({ node }, i) => {
    return {
      key: node.id,
      data: node,
      style: {
        height: spring(60, presets.gentle),
        opacity: spring(1, presets.gentle),
      }
    };
  });
};

const willEnter = () => {
  return {
    height: 0,
    opacity: 1,
  };
};

const willLeave = () => {
  return {
    height: spring(0),
    opacity: spring(0),
  };
};

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
    <TransitionMotion
      defaultStyles={getDefaultStyles(todos)}
      styles={getStyles(todos)}
      willLeave={willLeave}
      willEnter={willEnter}
    >
      {styles =>
        <div className="TodoList">
          {styles.map(style =>
            <TodoItem
              style={style.style}
              key={style.data.id}
              todo={style.data}
              onToggleTodo={onToggleTodo}
              onDeleteTodo={onDeleteTodo}
            />
          )}
        </div>
      }
    </TransitionMotion>

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
