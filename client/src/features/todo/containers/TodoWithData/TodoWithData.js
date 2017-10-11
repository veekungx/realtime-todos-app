import Todo from '../../components/Todo/Todo';
import { gql, graphql } from 'react-apollo';
import { compose } from 'recompose';
import TodoList from '../../components/TodoList/TodoList';
import TodoWithDataQuery from './TodoWithData.query.gql';

console.log(TodoWithDataQuery);
export default compose(
  graphql(TodoWithDataQuery)
)(Todo);