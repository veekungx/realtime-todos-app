import get from 'lodash/get';
import { withHandlers, withState, compose } from 'recompose';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';

import { setText } from '../../reducer';
import TodoTextInput from '../../components/TodoTextInput/TodoTextInput';
import CreateTodoMutation from './CreateTodo.mutation.gql';

const mapState = (state) => {
  return {
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
      }).then(() => props.onChangeText(''));
    }
  }),
)(TodoTextInput);
