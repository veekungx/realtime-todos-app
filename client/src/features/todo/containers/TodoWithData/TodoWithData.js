import get from 'lodash/get';
import Todo from '../../components/Todo/Todo';
import { graphql } from 'react-apollo';
import { withHandlers, lifecycle, compose } from 'recompose';
import { connect } from 'react-redux';

import TodoWithDataQuery from './TodoWithData.query.gql';
import ToggleTodoMutation from './ToggleTodo.mutation.gql';
import RemoveTodoMutation from './RemoveTodo.mutation.gql';
import TodoSubscription from './Todo.subscription.gql';

const mapState = (state) => ({
  filter: get(state, 'todo.filter'),
  search: get(state, 'todo.search'),
});

export default compose(
  connect(mapState),
  graphql(TodoWithDataQuery, {
    options: (props) => {
      return {
        variables: {
          state: props.filter,
          search: props.search || ""
        },
        fetchPolicy: 'cache-and-network'
      }
    }
  }),
  graphql(ToggleTodoMutation, { name: 'toggleTodo' }),
  graphql(RemoveTodoMutation, { name: 'removeTodo' }),
  withHandlers({
    onDeleteTodo: props => todo => {
      props.removeTodo({
        variables: { input: { id: todo.id } },
        update: (store, { data: { removeTodo: { todo: { id } } } }) => {
          const data = store.readQuery({
            query: TodoWithDataQuery,
            variables: {
              state: props.filter,
              search: props.search
            }
          });
          data.todos.edges = data.todos.edges.filter(({ node }) => node.id !== id);
          store.writeQuery({
            query: TodoWithDataQuery,
            variables: {
              state: props.filter,
              search: props.search
            },
            data
          });
        },
        optimisticResponse: {
          removeTodo: {
            __typename: "RemoveTodoPayload",
            todo: {
              __typename: "Todo",
              ...todo
            },
            edge: {
              __typename: "TodoEdge",
              node: {
                __typename: "Todo",
                ...todo

              }
            }
          }
        }
      })
    },
    onToggleTodo: props => todo => {
      const { id } = todo;
      props.toggleTodo({
        variables: { input: { id } },
        update: (store, { data: { removeTodo: { edge, todo } } }) => {
          const data = store.readQuery({
            query: TodoWithDataQuery,
            variables: {
              state: props.filter,
              search: props.search
            }
          });
          const index = data.todos.edges.findIndex(({ node }) => node.id === todo.id)
          let optTodo = data.todos.edges[index];
          optTodo.node.state = optTodo.node.state === "TODO_ACTIVE"
            ? "TODO_COMPLETED"
            : "TODO_ACTIVE"

          data.todos.edges[index] = optTodo;
          store.writeQuery({
            query: TodoWithDataQuery,
            variables: {
              state: props.filter,
              search: props.search
            },
            data
          });
        },
        optimisticResponse: {
          removeTodo: {
            __typename: "ToggleTodoPayload",
            todo: {
              __typename: "Todo",
              ...todo
            },
            edge: {
              __typename: "TodoEdge",
              node: {
                __typename: "Todo",
                ...todo
              }
            }
          }
        }
      })
    }
  }),
  lifecycle({
    componentDidMount() {
      const { data: { subscribeToMore } } = this.props;
      subscribeToMore({
        document: TodoSubscription,
        updateQuery: (previous, { subscriptionData }) => {
          let subTodo;
          switch (subscriptionData.data.Todo.mutation) {
            case "CREATED":
              subTodo = subscriptionData.data.Todo.edge
              if (this.props.filter !== "TODO_COMPLETED") {
                return {
                  ...previous,
                  todos: {
                    edges: [
                      subTodo,
                      ...previous.todos.edges,
                    ]
                  }
                }
              }
              return previous;
            case "DELETED":
              subTodo = subscriptionData.data.Todo.node;
              return {
                ...previous,
                todos: {
                  edges: previous.todos.edges.filter(({ node }) => node.id !== subTodo.id)
                }
              }
            case "UPDATED":
              //TODO
              // handle filter case on todo
              break;
            default:
              return previous;
          }
        }
      })
    }
  })
)(Todo)