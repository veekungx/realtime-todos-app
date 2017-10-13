import React from 'react';

import './Todo.scss';
import TodoInput from '../TodoInput/TodoInput';
import TodoFooter from '../TodoFooter/TodoFooter';
import TodoList from '../TodoList/TodoList';
import { LinearProgress } from 'material-ui/Progress';

const Todo =
  ({
    // HOC
    data: { loading, error, todos },

    // events
    onDeleteTodo,
    onToggleTodo,
  }) => {
    if (error) return <div className="Todo__error">{error.toString()}</div>;
    return (
      <div className='Todo'>
        <div className="Todo__title">
          REAL-TIME TODOS
        </div>
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
      </div>
    )
  };


Todo.propTypes = {};
Todo.defaultProps = {
  data: {
    loading: false,
    error: undefined,
    todos: {
      edges: []
    }
  }
};

export default Todo;