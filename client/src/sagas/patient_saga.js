import { call, put, takeEvery } from "redux-saga/effects";

import { searchPatients as sp, checkStatus as cs } from "../api/patients";

import {
  SEARCH_PATIENTS,
  SEARCH_PATIENTS_SUCCESS,
  SEARCH_PATIENTS_FAILURE,
  CHECK_STATUS,
  CHECK_STATUS_SUCCESS,
  CHECK_STATUS_FAILURE
} from "../actions/patients";

function* searchPatients(action) {
  try {
    const data = yield call(sp, action.payload);
    yield put({ type: SEARCH_PATIENTS_SUCCESS, data });
  } catch (e) {
    yield put({ type: SEARCH_PATIENTS_FAILURE, message: e.message });
  }
}

function* checkStatus(action) {
  try {
    const data = yield call(cs, action.payload);
    yield put({ type: CHECK_STATUS_SUCCESS, data });
  } catch (e) {
    yield put({ type: CHECK_STATUS_FAILURE, message: e.message });
  }
}

export default function*() {
  yield takeEvery(SEARCH_PATIENTS, searchPatients);
  yield takeEvery(CHECK_STATUS, checkStatus);
}
