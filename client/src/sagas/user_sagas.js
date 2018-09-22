import { call, put, takeEvery } from "redux-saga/effects";
import { redirectToHomePage, setToken } from "../../src/util/helpers";

import { login } from "../api/users";

import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from "../actions/session";

function* signInUser(action) {
  try {
    const userData = yield call(login, action.payload);
    yield put({ type: LOGIN_USER_SUCCESS, data: userData });
    yield call(setToken, userData.data.token);
    yield call(redirectToHomePage);
  } catch (e) {
    yield put({ type: LOGIN_USER_FAILURE, message: e.message });
  }
}

export default function* loginSaga() {
  yield takeEvery(LOGIN_USER, signInUser);
}
