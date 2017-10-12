const initialState = "TODO_ALL";
export const SET_FILTER = 'todo/SET_FILTER';
export const setFilter = (filter) => ({ type: SET_FILTER, filter });

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}