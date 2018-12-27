/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

// API related Action constants
export const LOGIN_REQUEST = 'src/App/LOGIN_REQUEST';
export const LOGIN_REQUEST_SUCCESS = 'src/App/LOGIN_REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAILURE = 'src/App/LOGIN_REQUEST_FAILURE';

export const LOGOUT_REQUEST = 'src/App/LOGOUT_REQUEST';
export const LOGOUT_REQUEST_SUCCESS = 'src/App/LOGOUT_REQUEST_SUCCESS';
export const LOGOUT_REQUEST_FAILURE = 'src/App/LOGOUT_REQUEST_FAILURE';
