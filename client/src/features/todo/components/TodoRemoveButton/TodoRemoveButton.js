import React from 'react';
import { string, func } from 'prop-types';
import { compose } from 'recompose';
import { gql, graphql } from 'react-apollo';

import './TodoRemoveButton.scss';
import TodoWithDataQuery from '../../containers/TodoWithData/TodoWithData.query.gql'
const TodoRemoveButton =
  ({
    // props
    id,

    // events
    onDeleteTodo
  }) => (
      <button
        className="TodoRemoveButton"
        onClick={async () => {
          onDeleteTodo({
            variables: {
              input: { id }
            },
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
                  id
                }
              }
            }
          })
        }}
      />
    );

TodoRemoveButton.propTypes = {
  id: string,
  onDeleteTodo: func,
};
TodoRemoveButton.defaultProps = {
  id: '',
  onDeleteTodo: undefined,
};

export default TodoRemoveButton;

const mutation = gql`
  mutation TodoRemoveButton($input : RemoveTodoInput!){
    removeTodo(input: $input){
      todo{
        id
      }
    }
  }
`;

export const TodoRemoveButtonWithMutation = compose(
  graphql(mutation, { name: 'onDeleteTodo' }),
)(TodoRemoveButton);
