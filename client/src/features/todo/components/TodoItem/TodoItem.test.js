import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from './TodoItem';

describe('TodoItem', () => {
  it('should render');

  describe('Components', () => {
    it('should have delete button', () => {
      const wrapper = shallow(<TodoItem />);
      expect(wrapper.find('.TodoItem__deleteButton').exists()).toEqual(true);
    });
    it('should have toggle button', () => {
      const wrapper = shallow(<TodoItem />);
      expect(wrapper.find('.TodoItem__toggleButton').exists()).toEqual(true);
    });
  });

  describe('State', () => {

    it('should have TODO_ACTIVE state', () => {
      const todo = {
        id: 1,
        state: 'TODO_ACTIVE',
      }
      const wrapper = shallow(<TodoItem todo={todo} />);
      expect(wrapper.find('.TodoItem').hasClass('TodoItem--TODO_ACTIVE')).toEqual(true);
    });
    it('should have TODO_COMPLETED state', () => {
      const todo = {
        id: 1,
        state: 'TODO_COMPLETED',
      }
      const wrapper = shallow(<TodoItem todo={todo} />);
      expect(wrapper.find('.TodoItem').hasClass('TodoItem--TODO_COMPLETED')).toEqual(true);
    });
  });

  describe('Props', () => {
    it('should render title', () => {
      const todo = {
        id: 1,
        title: 'Hello World',
      }
      const wrapper = shallow(<TodoItem todo={todo} />);
      expect(wrapper.find('.TodoItem__title').text()).toEqual('Hello World');
    });
  });

  describe('Events', () => {
    it('should handle onDeleteTodo', () => {
      const handler = jest.fn();
      const wrapper = shallow(<TodoItem onDeleteTodo={handler} />);
      wrapper.find('.TodoItem__deleteButton').simulate('click');
      expect(handler).toHaveBeenCalled();
    });
    it('should handle onToggleTodo', () => {
      const handler = jest.fn();
      const wrapper = shallow(<TodoItem onToggleTodo={handler} />);
      wrapper.find('.TodoItem__toggleButton').simulate('click');
      expect(handler).toHaveBeenCalled();
    });
  });
});
