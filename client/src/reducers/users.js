import { createReducer } from "redux-action";
import jwt_decode from 'jwt-decode';

export const LOGIN_USER = 'users/LOGIN_USER'
export const LOGIN_USER_SUCCESS = 'users/LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'users/LOGIN_USER_FAILURE'
export const LOGOUT_USER_SUCCESS = 'users/LOGOUT_USER_SUCCESS'

const initialState = {
  jwt: null,
  user: {},
  error: false,
  message: null,
  pending: false
}

export default createReducer(initialState, ({
  [LOGIN_USER]: (payload, state) => {
    return {
      ...state,
      error: false,
      message: null,
      pending: true,
      jwt: null,
      user: {}
    }
  },
  [LOGIN_USER_SUCCESS]: (payload, state) => {
    return {
      ...state,
      error: false,
      message: 'User signed in.',
      pending: false,
      jwt: payload,
      user: jwt_decode(payload.token)
    }
  },
  [LOGIN_USER_FAILURE]: (payload, state) => {
    return {
      ...state,
      data: payload,
      error: true,
      message: payload,
      pending: false
    }
  },
}));
