import { call, put, takeEvery } from "redux-saga/effects";

import { createPatientFile as cpf } from "../api/patient_files";

import {
  CREATE_PATIENT_FILE,
  CREATE_PATIENT_FILE_SUCCESS,
  CREATE_PATIENT_FILE_FAILURE
} from "../actions/patient_files";

function* createPatientFile(action) {
  try {
    const data = yield call(cpf, action.payload);
    yield put({ type: CREATE_PATIENT_FILE_SUCCESS, data: data });
  } catch (e) {
    yield put({ type: CREATE_PATIENT_FILE_FAILURE, message: e.message });
  }
}

export default function* createPatientFilesSaga() {
  yield takeEvery(CREATE_PATIENT_FILE, createPatientFile);
}
