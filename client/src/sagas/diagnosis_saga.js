import { call, put, takeEvery } from "redux-saga/effects";

import { createDiagnosis as cd } from "../api/diagnoses";

import {
  CREATE_DIAGNOSIS,
  CREATE_DIAGNOSIS_SUCCESS,
  CREATE_DIAGNOSIS_FAILURE,
  CREATE_DIAGNOSIS_ALLERGENS_FOUND
} from "../actions/diagnoses";

function* createDiagnosis(action) {
  try {
    const data = yield call(cd, action.payload);
    if (data.status === 200) {
      yield put({ type: CREATE_DIAGNOSIS_SUCCESS, data });
    } else {
      yield put({ type: CREATE_DIAGNOSIS_ALLERGENS_FOUND, data });
    }
  } catch (e) {
    yield put({ type: CREATE_DIAGNOSIS_FAILURE, message: e.message });
  }
}

export default function* diagnosesSaga() {
  yield takeEvery(CREATE_DIAGNOSIS, createDiagnosis);
}
