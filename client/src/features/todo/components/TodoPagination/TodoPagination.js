import React from 'react';
import { func } from 'prop-types';

import './TodoPagination.scss';

const TodoPagination =
  ({
    // events
    onPrevPage,
    onPerPage,
    onNextPage,
  }) =>
    (
      <div className="TodoPagination">
        <div className="TodoPagination__buttonGroup">
          <div
            className="TodoPagination__label"
          >
            Per Page:
          </div>
          <button
            className="TodoPagination__perPageButton"
            onClick={() => onPerPage(5)}
          >
            5
          </button>
          <button
            className="TodoPagination__perPageButton"
            onClick={() => onPerPage(10)}
          >
            10
          </button>
          <button
            className="TodoPagination__perPageButton"
            onClick={() => onPerPage(25)}
          >
            25
          </button>
        </div>
        <div className="TodoPagination__space" />
        <div className="TodoPagination__buttonGroup">
          <button
            className="TodoPagination__prevButton"
            onClick={onPrevPage}
          >
            Prev
          </button>
          <button
            className="TodoPagination__nextButton"
            onClick={onNextPage}
          >
            Next
          </button>
        </div>
      </div>
    );

TodoPagination.propTypes = {
  onPrevPage: func,
  onPerPage: func,
  onNextPage: func,
};
TodoPagination.defaultProps = {
  onPrevPage: undefined,
  onPerPage: undefined,
  onNextPage: undefined,
};
export default TodoPagination;
