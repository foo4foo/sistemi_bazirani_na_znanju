export const CREATE_DIAGNOSIS = "diagnoses/CREATE_DIAGNOSIS";
export const CREATE_DIAGNOSIS_SUCCESS = "diagnoses/CREATE_DIAGNOSIS_SUCCESS";
export const CREATE_DIAGNOSIS_FAILURE = "diagnoses/CREATE_DIAGNOSIS_FAILURE";
export const CREATE_DIAGNOSIS_ALLERGENS_FOUND =
  "diagnoses/CREATE_DIAGNOSIS_ALLERGENS_FOUND";

export const createDiagnosis = payload => ({
  type: CREATE_DIAGNOSIS,
  payload
});

export const createDiagnosisAllergensFound = payload => ({
  type: CREATE_DIAGNOSIS_ALLERGENS_FOUND,
  payload
});
