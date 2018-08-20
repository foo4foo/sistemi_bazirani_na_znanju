import { call, put, takeEvery } from "redux-saga/effects";

import { searchIllnesses as si } from "../api/illnesses";

import {
  SEARCH_ILLNESSES,
  SEARCH_ILLNESSES_SUCCESS,
  SEARCH_ILLNESSES_FAILURE
} from "../actions/illnesses";

function* searchIllnesses(action) {
  try {
    const illnesses = yield call(si, action.payload);
    yield put({ type: SEARCH_ILLNESSES_SUCCESS, data: illnesses });
  } catch (e) {
    yield put({ type: SEARCH_ILLNESSES_FAILURE, message: e.message });
  }
}

export default function* searchIllnessesSaga() {
  yield takeEvery(SEARCH_ILLNESSES, searchIllnesses);
}
