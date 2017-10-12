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
  text: get(state, 'todo.text'),
});

export default compose(
  connect(mapState),
  graphql(TodoWithDataQuery, {
    options: (props) => {
      return {
        variables: {
          state: props.filter,
          search: props.search
        },
        fetchPolicy: 'cache-and-network'
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
            default:
              return;
          }
        }
      })
    }
  })
)(Todo);