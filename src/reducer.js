/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from 'utils/history';
import countReducer from 'containers/HomePage/reducer';

const rootReducer = combineReducers({
  router: connectRouter(history),
  countReducer,
});

export default rootReducer;
