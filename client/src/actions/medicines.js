export const FETCH_MEDICINES = "illnesses/FETCH_MEDICINES";
export const FETCH_MEDICINES_SUCCESS = "illnesses/FETCH_MEDICINES_SUCCESS";
export const FETCH_MEDICINES_FAILURE = "illnesses/FETCH_MEDICINES_FAILURE";

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
