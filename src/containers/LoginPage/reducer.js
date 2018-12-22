/*
 *
 * LoginPage reducer
 *
 */

import { DEFAULT_ACTION } from './constants'

export const initialState = {}

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state
    default:
      return state
  }
}

export default loginPageReducer
