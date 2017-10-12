import {
  todoReducer,

  //const
  SET_FILTER,
  SET_TEXT,

  //actions
  setFilter,
  setText,

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
    })
  });
  describe('Reducer', () => {
    it('should return initial state', () => {
      const expectedResult = {
        filter: "TODO_ALL",
        text: ""
      };
      const actual = todoReducer(undefined);
      expect(actual).toEqual(expectedResult);
    });
    it('should handle SET_FILTER', () => {
      const stateBefore = { filter: "TODO_ALL", text: "" };
      const actual = todoReducer(stateBefore, setFilter('TODO_ACTIVE'));
      const expectedResult = {
        filter: "TODO_ACTIVE",
        text: ""
      };
      expect(actual).toEqual(expectedResult);
    });
    it('should handle SET_TEXT', () => {
      const stateBefore = { filter: "TODO_ALL", text: "" }
      const text = "Hello";
      const actual = todoReducer(stateBefore, setText(text));
      const expectedResult = {
        filter: "TODO_ALL",
        text: "Hello"
      }
      expect(actual).toEqual(expectedResult);
    });
  });
});