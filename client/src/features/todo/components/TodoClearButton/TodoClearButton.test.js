import React from 'react';
import { shallow } from 'enzyme';
import TodoClearButton from './TodoClearButton';

describe('TodoClearButton', () => {
  it('should render');

  describe('Events', () => {
    it('should handle onClear', () => {
      const handler = jest.fn();
      const wrapper = shallow(<TodoClearButton onClear={handler} />);
      wrapper.find('.TodoClearButton').simulate('click');
      expect(handler).toHaveBeenCalled();
    });
  });
});
