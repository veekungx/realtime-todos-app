import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import { combineEpics } from 'redux-observable';

const initialState = {
  filter: "TODO_ALL",
  text: "",
  search: "",
};


//acionts creator
export const SET_FILTER = 'todo/SET_FILTER';
export const SET_TEXT = 'todo/SET_TEXT';
export const SET_SEARCH = 'todo/SET_SEARCH';

//actions
export const setFilter = (filter) => ({ type: SET_FILTER, filter });
export const setText = (text) => ({ type: SET_TEXT, text });
export const setSearch = (text) => ({ type: SET_SEARCH, text });

// epic
export const setSearchEpic = (action$, store, deps) =>
  action$
    .ofType(SET_TEXT)
    .debounceTime(500, deps.scheduler)
    .distinctUntilChanged()
    .map((action) => ({
      type: SET_SEARCH,
      text: action.text
    }))

export const todoEpic = combineEpics(setSearchEpic);

export const todoReducer = (state = initialState, action = {}) => {
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
    case SET_SEARCH:
      return {
        ...state,
        search: action.text
      }
    default:
      return state;
  }
}