import { call, put, takeEvery } from "redux-saga/effects";

import { searchSymptoms as ss } from "../api/symptoms";

import {
  SEARCH_SYMPTOMS,
  SEARCH_SYMPTOMS_SUCCESS,
  SEARCH_SYMPTOMS_FAILURE
} from "../actions/symptoms";

function* searchSymptoms(action) {
  try {
    const symptoms = yield call(ss, action.payload);
    yield put({ type: SEARCH_SYMPTOMS_SUCCESS, data: symptoms });
  } catch (e) {
    yield put({ type: SEARCH_SYMPTOMS_FAILURE, message: e.message });
  }
}

export default function* searchSymptomsSaga() {
  yield takeEvery(SEARCH_SYMPTOMS, searchSymptoms);
}
