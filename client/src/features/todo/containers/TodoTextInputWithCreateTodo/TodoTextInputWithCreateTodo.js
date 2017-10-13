import get from 'lodash/get';
import { withHandlers, compose } from 'recompose';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';

import { setText } from '../../reducer';
import TodoTextInput from '../../components/TodoTextInput/TodoTextInput';
import CreateTodoMutation from './CreateTodo.mutation.gql';
import TodoWithDataQuery from '../TodoWithData/TodoWithData.query.gql';

const mapState = (state) => {
  return {
    state: get(state, 'todo.filter'),
    search: get(state, 'todo.search'),
    value: get(state, 'todo.text')
  }
}

const mapDispatch = (dispatch) => {
  return {
    onChangeText: (text) => dispatch(setText(text))
  }
}

export default compose(
  graphql(CreateTodoMutation, { name: 'createTodo' }),
  connect(mapState, mapDispatch),
  withHandlers({
    onSubmit: props => event => {
      if (!props.value) return;
      event.preventDefault();
      props.createTodo({
        variables: {
          input: {
            title: props.value
          }
        },
        update: (store, { data: { removeTodo: { edge } } }) => {
          const data = store.readQuery({
            query: TodoWithDataQuery,
            variables: {
              state: props.state,
              search: ""
            }
          });
          data.todos.edges = [
            edge,
            ...data.todos.edges
          ]
          store.writeQuery({
            query: TodoWithDataQuery,
            variables: {
              state: props.state,
              search: ""
            },
            data
          });
        },
        optimisticResponse: {
          removeTodo: {
            __typename: "CreateTodoTodoPayload",
            todo: {
              __typename: "Todo",
              id: -1,
              title: props.value,
              state: "TODO_ACTIVE"
            },
            edge: {
              __typename: "TodoEdge",
              node: {
                __typename: "Todo",
                id: -1,
                title: props.value,
                state: "TODO_ACTIVE"
              }
            }
          }
        }
      }).then(() => props.onChangeText(''));
    }
  }),
)(TodoTextInput);
