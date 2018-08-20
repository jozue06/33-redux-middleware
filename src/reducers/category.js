
import uuid from 'uuid/v1';
import defaultState from './defaultState';

// Action type
export const ADD = 'Category/ADD';
export const DELETE = 'Category/DELETE';

// Reducer
export default function reducer(state = defaultState, action) {  
  const { type, payload } = action;

  switch (type) {
    case ADD:
      payload.id = uuid(); // this ok or need fresh copy?
      return {
        ...state,
        categories: [...state.categories, payload]
      };
      case DELETE:
      return {
        ...state,
        categories: state.categories.filter(category => {
          return category.id !== payload.id})
      };

    default: return state;
  }
}


// Action Creators
export function addCategory(category) {
  return {
    type: ADD,
    payload: category
  }
}

export function deleteCategory(category) {
  return {
    type: DELETE,
    payload: category
  }
}