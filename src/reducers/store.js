import { createStore, combineReducers } from 'redux';
import expenseState from './expense';
import categoryState from './category';

const rootReducer = combineReducers({
  expenseState,
  categoryState,
});

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
