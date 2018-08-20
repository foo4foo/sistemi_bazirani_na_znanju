import jwt_decode from "jwt-decode";

import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from "../actions/session";

const initialState = {
  user: {},
  error: false,
  message: null,
  pending: false
};

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        error: false,
        message: null,
        pending: true,
        user: {}
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        error: false,
        message: "User signed in.",
        pending: false,
        user: JSON.parse(jwt_decode(action.data.data.token))
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        data: action.data,
        error: true,
        message: action.data,
        pending: false
      };
    default:
      return state;
  }
};
