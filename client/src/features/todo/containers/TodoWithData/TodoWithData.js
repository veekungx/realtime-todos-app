import Todo from '../../components/Todo/Todo';
import { gql, graphql } from 'react-apollo';
import { withHandlers, compose } from 'recompose';
import TodoList from '../../components/TodoList/TodoList';
import TodoWithDataQuery from './TodoWithData.query.gql';

import ToggleTodoMutation from './ToggleTodo.mutation.gql';

export default compose(
  graphql(TodoWithDataQuery),
  graphql(ToggleTodoMutation, { name: "toggleTodo" }),
  withHandlers({
    onToggleTodo: props => todo => {
      const { id } = todo;
      props.toggleTodo({
        variables: {
          input: {
            id
          }
        }
      })
    }
  })
)(Todo);