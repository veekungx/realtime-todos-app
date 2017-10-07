import React from 'react';
import { shallow } from 'enzyme';
import TodoCounter from './TodoCounter';

describe('TodoCounter', () => {
  describe('Props', () => {
    it('should render counter', () => {
      const wrapper = shallow(<TodoCounter counter={10} />);
      expect(wrapper.find('.TodoCounter').text()).toContain('10');
    });

    it('should render prural item when todo items > 2', () => {
      const wrapper = shallow(<TodoCounter counter={2} />);
      expect(wrapper.find('.TodoCounter').text()).toContain('2 items left');
    });

    it('should render singular item when todo item < 2', () => {
      const wrapper = shallow(<TodoCounter counter={1} />);
      expect(wrapper.find('.TodoCounter').text()).toContain('1 item left');
    });
  });
});
