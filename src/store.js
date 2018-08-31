import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promiseMiddleware from './promise-middleware';
import { categories } from './components/dashboard/reducers';
import { expensesByCategory } from './components/expenses/reducers';
import { error, loading } from './reducers';

const rootReducer = combineReducers({
  categories,
  expensesByCategory,
  error,
  loading
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      promiseMiddleware
    )
  )
);

export default store;