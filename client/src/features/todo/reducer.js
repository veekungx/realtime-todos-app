const initialState = {
  filter: "TODO_ALL",
  text: "",
};

export const SET_FILTER = 'todo/SET_FILTER';
export const SET_TEXT = 'todo/SET_TEXT';

export const setFilter = (filter) => ({ type: SET_FILTER, filter });
export const setText = (text) => ({ type: SET_TEXT, text });

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter
      };
    case SET_TEXT:
      return {
        ...state,
        text: action.text
      }
    default:
      return state;
  }
}