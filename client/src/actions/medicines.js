export const FETCH_MEDICINES = "medicines/FETCH_MEDICINES";
export const FETCH_MEDICINES_SUCCESS = "medicines/FETCH_MEDICINES_SUCCESS";
export const FETCH_MEDICINES_FAILURE = "medicines/FETCH_MEDICINES_FAILURE";
export const MATCH_ALLERGENS = "medicines/MATCH_ALLERGENS";
export const MATCH_ALLERGENS_SUCCESS = "medicines/MATCH_ALLERGENS_SUCCESS";
export const MATCH_ALLERGENS_FAILURE = "medicines/MATCH_ALLERGENS_FAILURE";

export const fetchMedicines = payload => ({
  type: FETCH_MEDICINES,
  payload
});

export const fetchMedicinesSuccess = payload => ({
  type: FETCH_MEDICINES_SUCCESS,
  payload
});

export const fetchMedicinesFailure = () => ({
  type: FETCH_MEDICINES_FAILURE
});

export const matchAllergens = payload => ({
  type: MATCH_ALLERGENS,
  payload
});

export const matchAllergensSuccess = payload => ({
  type: MATCH_ALLERGENS_SUCCESS,
  payload
});

export const matchAllergensFailure = () => ({
  type: MATCH_ALLERGENS_FAILURE
});
