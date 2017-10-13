import {
  todoReducer,

  //const
  SET_FILTER,
  SET_TEXT,
  SET_SEARCH,

  //actions
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
});