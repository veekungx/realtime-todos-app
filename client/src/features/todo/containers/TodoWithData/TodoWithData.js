import Todo from '../../components/Todo/Todo';
import { gql, graphql } from 'react-apollo';
import { withHandlers, compose } from 'recompose';
import TodoList from '../../components/TodoList/TodoList';
import TodoWithDataQuery from './TodoWithData.query.gql';

import ToggleTodoMutation from './ToggleTodo.mutation.gql';
import RemoveTodoMutation from './RemoveTodo.mutation.gql';

export default compose(
  graphql(TodoWithDataQuery),
  graphql(ToggleTodoMutation, { name: 'toggleTodo' }),
  graphql(RemoveTodoMutation, { name: 'removeTodo' }),
  withHandlers({
    onCreateTodo: props => todo => {
      
    },
    onDeleteTodo: props => todo => {
      const { id, title, state } = todo;
      props.removeTodo({
        variables: { input: { id } },
        update: (store, { data: { removeTodo: { todo: { id } } } }) => {
          const data = store.readQuery({ query: TodoWithDataQuery });
          data.todos.edges = data.todos.edges.filter(({ node }) => node.id !== id);
          store.writeQuery({ query: TodoWithDataQuery, data });
        },
        optimisticResponse: {
          removeTodo: {
            __typename: "RemoveTodoPayload",
            todo: {
              __typename: "Todo",
              id,
              title,
              state
            },
            edge: {
              __typename: "TodoEdge",
              node: {
                __typename: "Todo",
                id,
                title,
                state
              }
            }
          }
        }
      })
    },
    onToggleTodo: props => todo => {
      const { id } = todo;
      props.toggleTodo({
        variables: { input: { id } }
      })
    }
  })
)(Todo);