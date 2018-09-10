import { call, put, takeEvery } from "redux-saga/effects";

import { fetchAllergens as fa } from "../api/allergens";

import {
  FETCH_ALLERGENS,
  FETCH_ALLERGENS_SUCCESS,
  FETCH_ALLERGENS_FAILURE
} from "../actions/allergens";

function* fetchAllergens(action) {
  try {
    const allergens = yield call(fa);
    yield put({ type: FETCH_ALLERGENS_SUCCESS, data: allergens });
  } catch (e) {
    yield put({ type: FETCH_ALLERGENS_FAILURE, message: e.message });
  }
}

export default function* fetchAllergensSaga() {
  yield takeEvery(FETCH_ALLERGENS, fetchAllergens);
}
