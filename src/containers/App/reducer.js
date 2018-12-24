import * as Constant from './constants';

const initialState = {
  loading: false,// when a login request is in progress
  authenticated: false, // represents the logged in state
}

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case Constant.LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      }

    case Constant.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: !state.authenticated
      }

    case Constant.LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default loginReducer;
