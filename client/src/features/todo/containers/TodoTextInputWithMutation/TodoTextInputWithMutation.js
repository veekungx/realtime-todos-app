import React from 'react';
import { withState, compose } from 'recompose';
import TodoTextInput from '../../components/TodoTextInput/TodoTextInput';
import { gql, graphql } from 'react-apollo';

const mutation = gql`
  mutation TodoTextInputWithMutation($title :String!){
    createTodo(title: $title){
      id
      title
      state
    }
  }
`;


export default compose(
  withState('value', 'onChangeText', ''),
  graphql(mutation, {
    name: 'onSubmit'
  })
)(TodoTextInput);