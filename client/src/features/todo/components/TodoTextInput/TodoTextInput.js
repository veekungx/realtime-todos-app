import React from 'react';
import { string, func } from 'prop-types';
import { withState, compose } from 'recompose';
import { gql, graphql } from 'react-apollo';

import './TodoTextInput.scss';
import TodoWithDataQuery from '../../containers/TodoWithData/TodoWithData.query.gql';

const TodoTextInput =
  ({
    // props
    value,

    // events
    onChangeText,
    onSubmit

  }) => (
      <div className="TodoTextInput">
        <form
          className="TodoTextInput__form"
          onSubmit={async (e) => {
            if (!value) return;
            e.preventDefault();
            await onSubmit({
              variables: {
                input: {
                  title: value
                }
              },
              update: (store, { data: { createTodo: { edge } } }) => {
                const data = store.readQuery({ query: TodoWithDataQuery })
                data.todos.edges.push(edge);
                store.writeQuery({ query: TodoWithDataQuery, data });
              },
              optimisticResponse: {
                createTodo: {
                  __typename: "CreateTodoPayload",
                  edge: {
                    __typename: "TodoEdge",
                    node: {
                      __typename: "Todo",
                      id: "-1",
                      title: value,
                      state: "TODO_ACTIVE"
                    }
                  }
                }
              }
            });
            onChangeText('');
          }}
        >
          <input
            className="TodoTextInput__textInput"
            type="text"
            value={value}
            placeholder="What needs to be done?"
            onChange={e => onChangeText(e.target.value)}
          />
        </form>
      </div>
    );

TodoTextInput.propTypes = {
  value: string,
  onChangeText: func,
  onSubmit: func,
};

TodoTextInput.defaultProps = {
  value: '',
  onChangeText: undefined,
  onSubmit: undefined,
};

export default TodoTextInput;

const mutation = gql`
  mutation TodoTextInputWithMutation($input :CreateTodoInput!){
    createTodo(input: $input){
      edge{
        node{
          id
          title
          state
        }
      }
    }
  }
`;

const mutationOptions = {
  name: 'onSubmit'
}


export const TodoTextInputWithMutation = compose(
  withState('value', 'onChangeText', ''),
  graphql(mutation, mutationOptions)
)(TodoTextInput);
