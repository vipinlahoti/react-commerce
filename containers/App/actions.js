/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import * as Constants from './constants';

/**
 * Handles new login request.
 *
 * @return {object} An action object with a type of ACTION_CONSTANT
 */
export const loginRequest = (data, history) => {
  return async (dispatch) => {
    dispatch({
      type: Constants.LOGIN_REQUEST,
      data
    })

    try {
      // TODO: Login Service call

      dispatch({
        type: Constants.LOGIN_REQUEST_SUCCESS
      });
      history.push('/home');

    } catch(error) {
      dispatch({
        type: Constants.LOGIN_REQUEST_FAILURE,
        payload: 'Invalid email or password'
      });
    }
  };

}
