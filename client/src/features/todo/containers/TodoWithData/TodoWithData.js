import get from 'lodash/get';
import Todo from '../../components/Todo/Todo';
import { graphql } from 'react-apollo';
import { withHandlers, lifecycle, compose } from 'recompose';
import { connect } from 'react-redux';

import TodoWithDataQuery from './TodoWithData.query.gql';
import ToggleTodoMutation from './ToggleTodo.mutation.gql';
import RemoveTodoMutation from './RemoveTodo.mutation.gql';
import TodoSubscription from './Todo.subscription.gql';

const mapState = (state) => ({
  filter: get(state, 'todo.filter'),
  search: get(state, 'todo.search'),
});

export default compose(
  connect(mapState),
  graphql(TodoWithDataQuery, {
    options: (props) => {
      return {
        variables: {
          state: props.filter,
          search: props.search
        },
        fetchPolicy: 'network-only'
      }
    }
  }),
  graphql(ToggleTodoMutation, { name: 'toggleTodo' }),
  graphql(RemoveTodoMutation, { name: 'removeTodo' }),
  withHandlers({
    onDeleteTodo: props => todo => {
      const { id } = todo;
      props.removeTodo({
        variables: { input: { id } },
      })
    },
    onToggleTodo: props => todo => {
      const { id } = todo;
      props.toggleTodo({
        variables: { input: { id } }
      })
    }
  }),
  lifecycle({
    componentDidMount() {
      const { data: { subscribeToMore } } = this.props;
      subscribeToMore({
        document: TodoSubscription,
        updateQuery: (previous, { subscriptionData }) => {
          this.props.data.refetch();
        }
      })
    }
  })
)(Todo);