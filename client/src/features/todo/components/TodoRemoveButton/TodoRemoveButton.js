import React from 'react';
import { string, func } from 'prop-types';
import { compose } from 'recompose';
import { gql, graphql } from 'react-apollo';


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
        onClick={() => {
          onDeleteTodo({ variables: { id } })
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
  mutation TodoRemoveButton($id: ID!){
    removeTodo(id: $id){
      id
    }
  }
`;

export const TodoRemoveButtonWithMutation =  compose(
  graphql(mutation, { name: 'onDeleteTodo' }),
)(TodoRemoveButton);
