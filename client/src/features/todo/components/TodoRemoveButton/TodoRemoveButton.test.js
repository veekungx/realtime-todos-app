import React from 'react';
import { shallow } from 'enzyme';
import TodoRemoveButton from './TodoRemoveButton';

describe('TodoRemoveButton', () => {

  describe('Props', () => {

  });

  describe('Events', () => {
    it('should handle onDeleteTodo', () => {
      const handler = jest.fn();
      const wrapper = shallow(<TodoRemoveButton id="1" onDeleteTodo={handler} />);
      wrapper.find('.TodoRemoveButton').simulate('click');
      expect(handler).toHaveBeenCalled();
    });
  });
});
