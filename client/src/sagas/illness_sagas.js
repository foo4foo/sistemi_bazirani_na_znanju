import { call, put, takeEvery } from "redux-saga/effects";

import { searchIllnesses as si, matchIllnesses as mi } from "../api/illnesses";

import {
  SEARCH_ILLNESSES,
  SEARCH_ILLNESSES_SUCCESS,
  SEARCH_ILLNESSES_FAILURE,
  MATCH_ILLNESSES,
  MATCH_ILLNESSES_FAILURE,
  MATCH_ILLNESSES_SUCCESS
} from "../actions/illnesses";

function* searchIllnesses(action) {
  try {
    const illnesses = yield call(si, action.payload);
    yield put({ type: SEARCH_ILLNESSES_SUCCESS, data: illnesses });
  } catch (e) {
    yield put({ type: SEARCH_ILLNESSES_FAILURE, message: e.message });
  }
}

function* matchIllnesses(action) {
  try {
    const data = yield call(mi, action.payload);
    yield put({ type: MATCH_ILLNESSES_SUCCESS, data });
  } catch (e) {
    yield put({ type: MATCH_ILLNESSES_FAILURE, message: e.message });
  }
}

export default function*() {
  yield takeEvery(SEARCH_ILLNESSES, searchIllnesses);
  yield takeEvery(MATCH_ILLNESSES, matchIllnesses);
}
