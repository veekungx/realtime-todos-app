import React from 'react';
import { shallow } from 'enzyme';
import FortuneTeller from './FortuneTeller';
import Snackbar from 'material-ui/Snackbar';
describe('FortuneTeller', () => {
  describe('Components', () => {
    it('should have Snackbar', () => {
      const wrapper = shallow(<FortuneTeller />);
      expect(wrapper.find(Snackbar).exists()).toEqual(true);
    });
  });
  describe('Props', () => {
    it('should pass isOpen prop to Snackbar', () => {
      const wrapper = shallow(<FortuneTeller isOpen={true} />);
      expect(wrapper.find('withStyles(Snackbar)').props().open).toEqual(true);
    });

    it('should pass fortune prop to Snackbar', () => {
      const wrapper = shallow(<FortuneTeller fortune="Some Fortune" />);
      expect(wrapper.find('withStyles(Snackbar)').props().message).toContain('Some Fortune');
    })
  });

  describe('Events', () => {
    it('should handle onRequestClose', () => {
      const handler = jest.fn();
      const wrapper = shallow(<FortuneTeller onRequestClose={handler} />);
      wrapper.find('withStyles(Snackbar)').props().onRequestClose();
      expect(handler).toHaveBeenCalled();
    });
  });
});
