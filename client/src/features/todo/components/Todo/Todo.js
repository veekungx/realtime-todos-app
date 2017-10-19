import React from 'react';
import { func, bool, instanceOf, shape } from 'prop-types';
import { propType } from 'graphql-anywhere';
import { LinearProgress } from 'material-ui/Progress';

import './Todo.scss';
import TodoWithDataQuery from '../../containers/TodoWithData/TodoWithData.query.gql';
import TodoInput from '../TodoInput/TodoInput';
import TodoFooter from '../TodoFooter/TodoFooter';
import TodoList from '../TodoList/TodoList';

const Todo =
  ({
    // HOC
    data: {
      loading,
      error,
      todos,
    },

    // events
    onDeleteTodo,
    onToggleTodo,
  }) => {
    return (
      <div className="Todo">
        <div className="Todo__title">
          REAL-TIME TODOS
        </div>

        {error &&
          <div className="Todo__error">
            ERROR: please come back later.
          </div>
        }

        {!error &&
          <div className="Todo__container">
            <TodoFooter counter={todos ? todos.edges.length : 0} />
            <TodoInput />
            {loading
              ? <LinearProgress />
              : <LinearProgress color="white" mode="determinate" value={0} />
            }
            <TodoList todos={todos} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
            {/* <TodoPagination
            hasNextPage
            hasPrevPage
          /> */}
          </div>
        }
      </div>
    );
  };

Todo.propTypes = {
  data: shape({
    loading: bool,
    error: instanceOf(Error),
    todos: propType(TodoWithDataQuery),
  }),
  onDeleteTodo: func,
  onToggleTodo: func,
};

Todo.defaultProps = {
  data: {
    loading: false,
    error: undefined,
    todos: {
      edges: [],
    },
  },
  onDeleteTodo: undefined,
  onToggleTodo: undefined,
};

export default Todo;
