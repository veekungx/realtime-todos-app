import get from 'lodash/get';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import TodoFilterButton from '../../components/TodoFilterButton/TodoFilterButton';
import { setFilter } from '../../reducer';

const mapState = (state, ownProps) => ({
  isSelected: get(state, 'todo.filter') === ownProps.filter,
});

const mapDispatch = dispatch => ({
  onSelect: filter => dispatch(setFilter(filter)),
});

export default compose(connect(mapState, mapDispatch))(TodoFilterButton);
