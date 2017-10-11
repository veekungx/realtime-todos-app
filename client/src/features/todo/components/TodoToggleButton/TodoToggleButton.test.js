import React from 'react';
import { shallow } from 'enzyme';
import TodoToggleButton from './TodoToggleButton';

describe('TodoToggleButton', () => {
  it('should render');

  describe('Events', () => {
    const handler = jest.fn();
    const wrapper = shallow(<TodoToggleButton onToggleTodo={handler} />);
    console.log(wrapper.debug());
    wrapper.find('.TodoToggleButton').simulate('click');
    expect(handler).toHaveBeenCalled();
  });
});
