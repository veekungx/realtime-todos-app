import { withState, compose } from 'recompose';
import { gql, graphql } from 'react-apollo';
import TodoRemoveButton from '../../components/TodoRemoveButton/TodoRemoveButton';

const mutation = gql`
  mutation TodoRemoveButton($id: ID!){
    removeTodo(id: $id){
      id
    }
  }
`;

export default compose(
  graphql(mutation, { name: 'onDeleteTodo' }),
)(TodoRemoveButton);
