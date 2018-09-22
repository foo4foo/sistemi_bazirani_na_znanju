import { call, put, takeEvery } from "redux-saga/effects";

import {
  fetchAllergens as fa,
  matchMedicinesAgainsAllergens as mmaa
} from "../api/allergens";

import {
  FETCH_ALLERGENS,
  FETCH_ALLERGENS_SUCCESS,
  FETCH_ALLERGENS_FAILURE
} from "../actions/allergens";

import {
  MATCH_ALLERGENS,
  MATCH_ALLERGENS_FAILURE,
  MATCH_ALLERGENS_SUCCESS
} from "../actions/medicines";

function* fetchAllergens(action) {
  try {
    const allergens = yield call(fa);
    yield put({ type: FETCH_ALLERGENS_SUCCESS, data: allergens });
  } catch (e) {
    yield put({ type: FETCH_ALLERGENS_FAILURE, message: e.message });
  }
}

function* matchMedicinesAgainsAllergens(action) {
  try {
    const allergens = yield call(mmaa, action.payload);
    yield put({ type: MATCH_ALLERGENS_SUCCESS, data: allergens });
  } catch (e) {
    yield put({ type: MATCH_ALLERGENS_FAILURE, message: e.message });
  }
}

export default function* fetchAllergensSaga() {
  yield takeEvery(FETCH_ALLERGENS, fetchAllergens);
  yield takeEvery(MATCH_ALLERGENS, matchMedicinesAgainsAllergens);
}
