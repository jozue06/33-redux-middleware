import { createStore, combineReducers,  applyMiddleware } from 'redux';
import expenseState from './expense';
import categoryState from './category';
import reporter from './reporter'
import catValidator from './catValidator'
import expValidator from './expValidator'

const rootReducer = combineReducers({
  expenseState,
  categoryState,
});

export default createStore(rootReducer, applyMiddleware(reporter, catValidator, expValidator));
