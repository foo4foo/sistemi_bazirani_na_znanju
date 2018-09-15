import { call, put, takeEvery } from "redux-saga/effects";

import { fetchMedicines as fm } from "../api/medicines";

import {
  FETCH_MEDICINES,
  FETCH_MEDICINES_SUCCESS,
  FETCH_MEDICINES_FAILURE
} from "../actions/medicines";

function* fetchMedicines(action) {
  try {
    const data = yield call(fm, action.payload);
    yield put({ type: FETCH_MEDICINES_SUCCESS, data });
  } catch (e) {
    yield put({ type: FETCH_MEDICINES_FAILURE, message: e.message });
  }
}

export default function*() {
  yield takeEvery(FETCH_MEDICINES, fetchMedicines);
}
