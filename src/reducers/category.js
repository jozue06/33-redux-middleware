
import uuid from 'uuid/v1';
import defaultState from './defaultState';

// Action type
export const ADD = 'Category/ADD';
export const DELETE = 'Category/DELETE';

// Reducer
export default function reducer(state = defaultState, action) {

  console.log({action});
  
  const { type, payload } = action;

  switch (type) {
    case ADD:
      payload.id = uuid(); // this ok or need fresh copy?
      return {
        ...state,
        categories: [...state.categories, payload]
      };
      case DELETE:
      // console.log(state.categories)
      return {
        ...state,
        categories: state.categories.filter(category => {
          console.log('payss', payload)
          return category.id !== payload.id})
      };

    default: return state;
  }
}


// Action Creators
export function addCategory(category) {
  console.log('addCategory action', category);
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