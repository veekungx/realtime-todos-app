import React from 'react';
import { number } from 'prop-types';
import { gql } from 'react-apollo';
import './TodoCounter.scss';

const TodoCounter =
  ({
    // props
    counter
  }) => (
      <div className='TodoCounter'>
        {counter} {counter < 2 ? 'item' : 'items'} left
      </div>
    );

TodoCounter.propTypes = {
  counter: number
};
TodoCounter.defaultProps = {
  counter: 0
};
export default TodoCounter;
