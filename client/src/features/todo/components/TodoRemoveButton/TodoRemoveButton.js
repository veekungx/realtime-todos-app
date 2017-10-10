import React from 'react';
import { string, func } from 'prop-types';
import { compose } from 'recompose';
import { gql, graphql } from 'react-apollo';
import { TODO_LIST_QUERY } from '../TodoList/TodoList';

import './TodoRemoveButton.scss';

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
          console.log(id);
          onDeleteTodo({
            variables: {
              input: { id }
            },
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
      edge{
        node{
          id
          title
        }
      }
    }
  }
`;

export const TodoRemoveButtonWithMutation =  compose(
  graphql(mutation, { name: 'onDeleteTodo' }),
)(TodoRemoveButton);
