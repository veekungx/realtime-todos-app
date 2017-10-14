import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import TodoWithData from '../../features/todo/containers/TodoWithData/TodoWithData';
import FortuneTellerWithQuery from '../../containers/FortuneTellerWithQuery/FortuneTellerWithQuery';

describe('App', () => {
  describe('Components', () => {
    it('should have TodoWithData', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(TodoWithData).exists()).toEqual(true);
    });
    it('should have FortuneTellerWithQuery', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(FortuneTellerWithQuery).exists()).toEqual(true);
    });
  });
});
