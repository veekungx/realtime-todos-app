import React from 'react';
import { string, func } from 'prop-types';
import { withState, compose } from 'recompose';
import { gql, graphql } from 'react-apollo';
import { TODO_LIST_QUERY } from '../TodoList/TodoList';

import './TodoTextInput.scss';

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
                CreateTodoInput: {
                  title: value
                }
              },
              update: (store, { data: { createTodo: { edge } } }) => {
                const data = store.readQuery({ query: TODO_LIST_QUERY })
                data.todos.edges.push(edge);
                store.writeQuery({ query: TODO_LIST_QUERY, data });
              },
              optimisticResponse: {
                createTodo: {
                  __typename: "CreateTodoPayload",
                  todo: {
                    __typename: "Todo",
                    id: "-1",
                    title: "OK",
                    state: "TODO_ACTIVE"
                  },
                  edge: {
                    __typename: "TodoEdge",
                    node: {
                      __typename: "Todo",
                      id: "-1",
                      title: "OK",
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
  mutation TodoTextInputWithMutation($CreateTodoInput :CreateTodoInput!){
    createTodo(input: $CreateTodoInput){
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
