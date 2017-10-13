import 'rxjs/add/operator/toArray';
import { VirtualTimeScheduler } from 'rxjs/scheduler/VirtualTimeScheduler';
import { createEpicMiddleware, ActionsObservable } from 'redux-observable';
import configureMockStore from 'redux-mock-store';

import {
  // reducer
  todoReducer,
  // epics
  todoEpic,
  setSearchEpic,
  // const
  SET_FILTER,
  SET_TEXT,
  SET_SEARCH,
  // actions
  setFilter,
  setText,
  setSearch,

} from './reducer';



describe('Todo state', () => {

  describe('Actions', () => {
    it('should create an action to set filter', () => {
      const filter = "TODO_ALL";
      const actual = setFilter(filter);
      const expectedResult = {
        type: SET_FILTER,
        filter
      };
      expect(actual).toEqual(expectedResult);
    });

    it('should create an action set text', () => {
      const text = "hello";
      const actual = setText(text);
      const expectedResult = {
        type: SET_TEXT,
        text
      }
      expect(actual).toEqual(expectedResult);
    })

    it('should create an action to set search', () => {
      const text = 'hi';
      const actual = setSearch(text);
      const expectedResult = {
        type: SET_SEARCH,
        text,
      }
      expect(actual).toEqual(expectedResult);
    });
  });

  describe('Reducer', () => {
    it('should return initial state', () => {
      const expectedResult = {
        filter: "TODO_ALL",
        text: "",
        search: "",
      };
      const actual = todoReducer(undefined);
      expect(actual).toEqual(expectedResult);
    });
    it('should handle SET_FILTER', () => {
      const stateBefore = { filter: "TODO_ALL", text: "", search: "" };
      const actual = todoReducer(stateBefore, setFilter('TODO_ACTIVE'));
      const expectedResult = {
        filter: "TODO_ACTIVE",
        text: "",
        search: ""
      };
      expect(actual).toEqual(expectedResult);
    });
    it('should handle SET_TEXT', () => {
      const stateBefore = { filter: "TODO_ALL", text: "", search: "" }
      const text = "Hello";
      const actual = todoReducer(stateBefore, setText(text));
      const expectedResult = {
        filter: "TODO_ALL",
        text: "Hello",
        search: ""
      }
      expect(actual).toEqual(expectedResult);
    });

    it('should handle SET_SEARCH', () => {
      const stateBefore = { filter: "TODO_ALL", text: "", search: "" }
      const text = "Hello";
      const actual = todoReducer(stateBefore, setSearch(text));
      const expectedResult = {
        filter: "TODO_ALL",
        search: "Hello",
        text: "",
      }
      expect(actual).toEqual(expectedResult);
    });
  });

  describe('Epics', () => {
    it('should perform SET_SEARCH action', () => {
      const scheduler = new VirtualTimeScheduler();
      const epicMiddleware = createEpicMiddleware(todoEpic, {
        dependencies: {
          scheduler
        }
      });
      const mockStore = configureMockStore([epicMiddleware]);
      const store = mockStore();

      store.dispatch(setText('hello'));
      scheduler.flush();

      expect(store.getActions()).toEqual([
        { type: SET_TEXT, text: 'hello' },
        { type: SET_SEARCH, text: 'hello' }
      ]);
    });
  });
});