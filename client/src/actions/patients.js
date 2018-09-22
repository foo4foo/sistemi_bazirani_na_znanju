export const SEARCH_PATIENTS = "patients/SEARCH_PATIENTS";
export const SEARCH_PATIENTS_SUCCESS = "users/SEARCH_PATIENTS_SUCCESS";
export const SEARCH_PATIENTS_FAILURE = "users/SEARCH_PATIENTS_FAILURE";
export const CHECK_STATUS = "patients/CHECK_STATUS";
export const CHECK_STATUS_SUCCESS = "patients/CHECK_STATUS_SUCCESS";
export const CHECK_STATUS_FAILURE = "patients/CHECK_STATUS_FAILURE";

export const searchPatients = pattern => ({
  type: SEARCH_PATIENTS,
  payload: pattern
});

export const searchPatientsSuccess = pattern => ({
  type: SEARCH_PATIENTS_SUCCESS,
  payload: pattern
});

export const searchPatientsFailure = () => ({ type: SEARCH_PATIENTS_FAILURE });

export const checkStatus = data => ({
  type: CHECK_STATUS,
  payload: data
});

export const checkStatusSuccess = data => ({
  type: CHECK_STATUS_SUCCESS,
  payload: data
});

export const checkStatusFailure = () => ({
  type: CHECK_STATUS_FAILURE
});
