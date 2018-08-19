export const LOGIN_USER = 'users/LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'users/LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'users/LOGIN_USER_FAILURE';

export const requestLogin = (data) => ({ type: LOGIN_USER, payload: data });
export const login = (data) => ({ type: LOGIN_USER_SUCCESS, payload: data });
export const loginFailure = () => ({ type: LOGIN_USER_FAILURE });
