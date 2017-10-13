import React from 'react';
import { shallow } from 'enzyme';
import TodoFooter from './TodoFooter';

import TodoFilterButtonWithConnect from '../../containers/TodoFilterButtonWithConnect/TodoFilterButtonWithConnect';
import TodoClearButtonWithClearCompletedTodos from '../TodoCounter/TodoCounter';
import TodoCounter from '../TodoCounter/TodoCounter';

describe('TodoFooter', () => {
  it('should render');

  describe('Props', () => {
    it('should pass counter to TodoCounter', () => {
      const wrapper = shallow(<TodoFooter counter={10} />);
      expect(wrapper.find('TodoCounter').props().counter).toEqual(10);
    });
  });
  describe('Components', () => {

    it('should have filter button', () => {
      const wrapper = shallow(<TodoFooter />);
      expect(wrapper.find(TodoFilterButtonWithConnect).exists()).toEqual(true);
    });

    it('should have clear all completed todo button', () => {
      const wrapper = shallow(<TodoFooter />);
      expect(wrapper.find(TodoClearButtonWithClearCompletedTodos).exists()).toEqual(true);
    });

    it('should have TodoCounter', () => {
      const wrapper = shallow(<TodoFooter />);
      expect(wrapper.find(TodoCounter).exists()).toEqual(true);
    });

  });

  describe('Events', () => {

  });
});
