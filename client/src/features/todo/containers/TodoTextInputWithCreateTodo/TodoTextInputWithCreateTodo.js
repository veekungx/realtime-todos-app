import { withHandlers, withState, compose } from 'recompose';
import { graphql } from 'react-apollo';
import TodoTextInput from '../../components/TodoTextInput/TodoTextInput';
import CreateTodoMutation from './CreateTodo.mutation.gql';
import TodoWithDataQuery from '../TodoWithData/TodoWithData.query.gql';

export default compose(
  graphql(CreateTodoMutation, { name: 'createTodo' }),
  withState('value', 'onChangeText', ''),
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
        // update: (store, { data: { createTodo: { edge } } }) => {
        //   const data = store.readQuery({ query: TodoWithDataQuery })
        //   data.todos.edges.push(edge);
        //   store.writeQuery({ query: TodoWithDataQuery, data });
        // },
        // optimisticResponse: {
        //   createTodo: {
        //     __typename: "CreateTodoPayload",
        //     edge: {
        //       __typename: "TodoEdge",
        //       node: {
        //         __typename: "Todo",
        //         id: "-1",
        //         title: props.value,
        //         state: "TODO_ACTIVE"
        //       }
        //     }
        //   }
        // }
      }).then(() => props.onChangeText(''));
    }
  }),
)(TodoTextInput);
