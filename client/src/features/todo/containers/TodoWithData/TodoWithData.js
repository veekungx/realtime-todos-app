import Todo from '../../components/Todo/Todo';
import { graphql } from 'react-apollo';
import { withHandlers, lifecycle, compose } from 'recompose';
import { connect } from 'react-redux';

import TodoWithDataQuery from './TodoWithData.query.gql';
import ToggleTodoMutation from './ToggleTodo.mutation.gql';
import RemoveTodoMutation from './RemoveTodo.mutation.gql';
import TodoSubscription from './Todo.subscription.gql';

const mapState = (state) => ({
  filter: state.todo.filter,
  text: state.todo.text,
});

export default compose(
  connect(mapState),
  graphql(TodoWithDataQuery, {
    options: (props) => {
      return {
        variables: {
          state: props.filter,
          search: props.text
        }
      }
    }
  }),
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
        document: TodoSubscription,
        updateQuery: (previous, { subscriptionData }) => {
          let subTodo;
          let index;
          switch (subscriptionData.data.Todo.mutation) {
            case "CREATED":
              subTodo = subscriptionData.data.Todo.edge
              return {
                ...previous,
                todos: {
                  edges: [
                    ...previous.todos.edges,
                    subTodo,
                  ]
                }
              }
            case "DELETED":
              subTodo = subscriptionData.data.Todo.node;
              return {
                ...previous,
                todos: {
                  edges: previous.todos.edges.filter(({ node }) => node.id !== subTodo.id)
                }
              }
            // case "UPDATED":
            //   subTodo = subscriptionData.data.Todo.node;
            //   index = previous.todos.edges.findIndex(({ node }) => node.id === subTodo.id);
            //   console.log(index);
            //   return {
            //     ...previous,
            //     todos: {
            //       edges: previous.todos.edges
            //     }
            //   }
            default:
              return;
          }
        }
      })
    }
  })
)(Todo);