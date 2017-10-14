import React from 'react';
import { func } from 'prop-types';
import { propType } from 'graphql-anywhere';
import { TransitionMotion, spring, presets } from 'react-motion';

import './TodoList.scss';
import TodoItem from '../TodoItem/TodoItem';
import TodoListFragment from './TodoList.fragment.gql';

const getDefaultStyles = todos =>
  todos.edges.map(({ node }) =>
    ({
      key: node.id,
      data: node,
      style: {
        height: 0,
        opacity: 1,
      },
    }));

const getStyles = todos =>
  todos.edges.map(({ node }) =>
    ({
      key: node.id,
      data: node,
      style: {
        height: spring(60, presets.gentle),
        opacity: spring(1, presets.gentle),
      },
    }));

const willEnter = () => ({
  height: 0,
  opacity: 1,
});

const willLeave = () => ({
  height: spring(0),
  opacity: spring(0),
});

const TodoList = ({
  // props
  todos,
  // events
  onToggleTodo,
  onDeleteTodo,
}) => {
  if (!todos.edges.length) {
    return (
      <div className="TodoList__noData">
        {"You don't have any item on todo list. Try to add one."}
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
        (
          <div className="TodoList">
            {styles.map(style =>
              (<TodoItem
                style={style.style}
                key={style.data.id}
                todo={style.data}
                onToggleTodo={onToggleTodo}
                onDeleteTodo={onDeleteTodo}
              />
              ))}
          </div>
        )
      }
    </TransitionMotion>

  );
};

TodoList.propTypes = {
  todos: propType(TodoListFragment),
  onDeleteTodo: func,
  onToggleTodo: func,
};

TodoList.defaultProps = {
  todos: {
    edges: [],
  },
  onDeleteTodo: undefined,
  onToggleTodo: undefined,
};

export default TodoList;
