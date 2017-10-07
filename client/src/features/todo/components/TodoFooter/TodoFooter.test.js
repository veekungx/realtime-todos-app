import React from 'react';
import { shallow } from 'enzyme';
import TodoFooter from './TodoFooter';
import TodoFilterButton from '../TodoFilterButton/TodoFilterButton';

describe('TodoFooter', () => {
  it('should render');

  describe('Compononents', () => {
    it('should have TodoFilterButton', () => {
      const wrapper = shallow(<TodoFooter />);
      expect(wrapper.containsAllMatchingElements([
        <TodoFilterButton />
      ])).toEqual(true);
    });

    it('should have clear all completed todo button', () => {
      const wrapper = shallow(<TodoFooter />);
      expect(wrapper.find('.TodoFooter__clearButton').exists()).toEqual(true);
    });

  });

  describe('Events', () => {
    it('should handle onClear', () => {
      const handler = jest.fn();
      const wrapper = shallow(<TodoFooter onClear={handler} />);
      wrapper.find('.TodoFooter__clearButton').simulate('click');
      expect(handler).toHaveBeenCalled();
    });
  });
});
