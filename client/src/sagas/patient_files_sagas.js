import { call, put, takeEvery } from "redux-saga/effects";

import { createPatientFile as cpf } from "../api/patient_files";
import { searchPatientFiles as spf } from "../api/patient_files";

import {
  CREATE_PATIENT_FILE,
  CREATE_PATIENT_FILE_SUCCESS,
  CREATE_PATIENT_FILE_FAILURE,
  SEARCH_PATIENT_FILES,
  SEARCH_PATIENT_FILES_SUCCESS,
  SEARCH_PATIENT_FILES_FAILURE
} from "../actions/patient_files";

function* searchPatientFiles(action) {
  try {
    const data = yield call(spf, action.payload);
    yield put({ type: SEARCH_PATIENT_FILES_SUCCESS, data });
  } catch (e) {
    yield put({ type: SEARCH_PATIENT_FILES_FAILURE, message: e.message });
  }
}

function* createPatientFile(action) {
  try {
    const data = yield call(cpf, action.payload);
    yield put({ type: CREATE_PATIENT_FILE_SUCCESS, data: data });
  } catch (e) {
    yield put({ type: CREATE_PATIENT_FILE_FAILURE, message: e.message });
  }
}

export default function*() {
  yield takeEvery(SEARCH_PATIENT_FILES, searchPatientFiles);
  yield takeEvery(CREATE_PATIENT_FILE, createPatientFile);
}
