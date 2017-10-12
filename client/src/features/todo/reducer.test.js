import {
  default as reducer,
  SET_FILTER,
  setFilter,
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
  });
  describe('Reducer', () => {
    it('should return initial state', () => {
      const actual = reducer(undefined);
      expect(actual).toEqual('TODO_ALL');
    });
    it('should handle SET_FILTER', () => {
      const actual = reducer(undefined, setFilter('TODO_ACTIVE'));
      const expectedResult = "TODO_ACTIVE";
      expect(actual).toEqual(expectedResult);
    });
  });
});