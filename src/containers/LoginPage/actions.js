/*
 *
 * LoginPage actions
 *
 */

import { DEFAULT_ACTION_REQUESTED, DEFAULT_ACTION } from './constants';

export const defaultAction = () => {
  return dispatch => {
    dispatch({
      type: DEFAULT_ACTION_REQUESTED,
    })

    dispatch({
      type: DEFAULT_ACTION,
    })
  };
}
