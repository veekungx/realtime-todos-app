import React from 'react';
import { } from 'prop-types';

import './TodoPagination.scss';

const TodoPagination =
  ({
    // props

    // events
    onPrevPage,
    onPerPage,
    onNextPage
  }) => (
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

TodoPagination.propTypes = {};
TodoPagination.defaultProps = {};
export default TodoPagination;
