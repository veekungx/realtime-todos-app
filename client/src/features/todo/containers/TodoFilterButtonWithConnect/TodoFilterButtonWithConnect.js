import TodoFilterButton from '../../components/TodoFilterButton/TodoFilterButton';
import { setFilter } from '../../reducer';
import { compose } from 'recompose';
import { connect } from 'react-redux';

const mapState = (state, ownProps) => {
  return {
    isSelected: state.todo === ownProps.filter
  }
};
const mapDispatch = (dispatch) => {
  return {
    onSelect: (filter) => dispatch(setFilter(filter)),
  }
};

export default compose(
  connect(mapState, mapDispatch),
)(TodoFilterButton);