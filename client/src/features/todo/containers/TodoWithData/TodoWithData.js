import Todo from '../../components/Todo/Todo';
import { gql, graphql } from 'react-apollo';
import { compose } from 'recompose';
import TodoList from '../../components/TodoList/TodoList';

const query = gql`
  query {
    todos{
      ...TodoList_todos
    }
  }
  ${TodoList.fragment}
`;

export default compose(
  graphql(query)
)(Todo);