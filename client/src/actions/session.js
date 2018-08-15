import axios from 'axios'

import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../reducers/users';

export function login(data, callback) {
  return dispatch => {
    dispatch({ type: LOGIN_USER });

    axios({
      url: `http://localhost:3000/api/users/session/sign_in`,
      method: 'POST',
      data: {
        email: data.username,
        password: data.password
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if ( response.data !== 'error' ) {
        localStorage.setItem('jwt', response.data.token);
        dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data });
        callback();
      } else {
        dispatch({ type: LOGIN_USER_FAILURE, payload: response.message });
      }
    })
      .catch((error) => {
        dispatch({ type: LOGIN_USER_FAILURE, payload: { message: 'Email and/or password is invalid.' } });
      })
  }
};
