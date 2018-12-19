import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import history from 'utils/history';
import rootReducer from './reducer';

// Create logger for Redux
const logger = createLogger({
  // Check options at https://github.com/LogRocket/redux-logger#options
  collapsed: true
});

// Create the store with two middlewares
// 1. thunkMiddleware: Makes thunk work
// 2. routerMiddleware: Syncs the location/URL path to the state
const middlewares = [thunk, routerMiddleware(history), logger];

const enhancers = [applyMiddleware(...middlewares)];

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(...enhancers),
);

export default store;
