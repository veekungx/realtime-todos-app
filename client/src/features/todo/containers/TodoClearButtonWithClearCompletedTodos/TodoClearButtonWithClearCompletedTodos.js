import { withHandlers, compose } from 'recompose';
import { graphql } from 'react-apollo';

import TodoClearButton from '../../components/TodoClearButton/TodoClearButton';
import ClearCompletedTodosMutation from './ClearComplatedTodos.mutation.gql';
import TodoWithData from '../TodoWithData/TodoWithData.query.gql';

export default compose(
  graphql(ClearCompletedTodosMutation, { name: 'clearCompletedTodos' }),
  withHandlers({
    onClear: props => event => {
      props.clearCompletedTodos({
        refetchQueries: [{
          query: TodoWithData
        }]
      })
    }
  })
)(TodoClearButton);
