/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import history from 'utils/history';
import countReducer from 'containers/HomePage/reducer';
import loginReducer from 'containers/App/reducer';

const rootReducer = combineReducers({
  router: connectRouter(history),
  form: formReducer,
  countReducer,
  loginReducer
});

export default rootReducer;
