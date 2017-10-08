import React from 'react';
import { withState, compose } from 'recompose';
import TodoTextInput from '../../components/TodoTextInput/TodoTextInput';
import { gql, graphql } from 'react-apollo';
import { TODO_LIST_QUERY } from '../TodoListWithData/TodoListWithData';
const mutation = gql`
  mutation TodoTextInputWithMutation($title :String!){
    createTodo(title: $title){
      id
      title
      state
    }
  }
`;

const mutationOptions = {
  name: 'onSubmit',
  options: {
    update: (proxy, { data: { createTodo } }) => {
      const data = proxy.readQuery({ query: TODO_LIST_QUERY })
      console.log(createTodo);
      data.todos.edges.push({
        node: createTodo,
        __typename: "TodoEdge"
      });
      proxy.writeQuery({ query: TODO_LIST_QUERY, data });
    },
    // optimisticResponse: {
    //   createTodo: {
    //     id: -1,
    //     title: "Hate",
    //   }
    // }
  }
}


export default compose(
  withState('value', 'onChangeText', ''),
  graphql(mutation, mutationOptions)
)(TodoTextInput);