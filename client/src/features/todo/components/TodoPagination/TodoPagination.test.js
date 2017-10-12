import React from 'react';
import { shallow } from 'enzyme';
import TodoPagination from './TodoPagination';

describe('TodoPagination', () => {
  describe('Events', () => {
    it('should handle onNextPage', () => {
      const handler = jest.fn();
      const wrapper = shallow(<TodoPagination onNextPage={handler} />);
      wrapper.find('.TodoPagination__nextButton').simulate('click');
      expect(handler).toHaveBeenCalled();
    });

    it('should handle onPerPage', () => {
      const handler = jest.fn();
      const wrapper = shallow(<TodoPagination onPerPage={handler} />);
      wrapper.find('.TodoPagination__perPageButton').at(0).simulate('click');
      expect(handler).toHaveBeenCalled();
    })

    it('should handle onPrevPage', () => {
      const handler = jest.fn();
      const wrapper = shallow(<TodoPagination onPrevPage={handler} />);
      wrapper.find('.TodoPagination__prevButton').simulate('click');
      expect(handler).toHaveBeenCalled();
    })
  });
});
