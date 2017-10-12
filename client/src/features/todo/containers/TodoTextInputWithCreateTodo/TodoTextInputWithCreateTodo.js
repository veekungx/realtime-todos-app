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
      }).then(() => props.onChangeText(''));
    }
  }),
)(TodoTextInput);
