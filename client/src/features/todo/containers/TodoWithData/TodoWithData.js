import Todo from '../../components/Todo/Todo';
import { graphql } from 'react-apollo';
import { withHandlers, lifecycle, compose } from 'recompose';

import TodoWithDataQuery from './TodoWithData.query.gql';
import ToggleTodoMutation from './ToggleTodo.mutation.gql';
import RemoveTodoMutation from './RemoveTodo.mutation.gql';
import TodoAddedSubscription from './TodoAdded.subscription.gql';

export default compose(
  graphql(TodoWithDataQuery),
  graphql(ToggleTodoMutation, { name: 'toggleTodo' }),
  graphql(RemoveTodoMutation, { name: 'removeTodo' }),
  withHandlers({
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
  }),
  lifecycle({
    componentDidMount() {
      const { subscribeToMore } = this.props.data;
      subscribeToMore({
        document: TodoAddedSubscription,
        updateQuery: (previous, { subscriptionData }) => {

          const result = {
            ...previous,
            todos: {
              edges: [
                subscriptionData.data.Todo.edge,
                ...previous.todos.edges,
              ]
            }
          }

          return result;
        }
      })
    }
  })
)(Todo);