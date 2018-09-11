export const CREATE_PATIENT_FILE = "patient_files/CREATE_PATIENT_FILE";
export const CREATE_PATIENT_FILE_SUCCESS =
  "patient_files/CREATE_PATIENT_FILE_SUCCESS";
export const CREATE_PATIENT_FILE_FAILURE =
  "patient_files/CREATE_PATIENT_FILE_FAILURE";

export const createPatientFile = data => ({
  type: CREATE_PATIENT_FILE,
  payload: data
});
export const createPatientFileSuccess = data => ({
  type: CREATE_PATIENT_FILE_SUCCESS,
  payload: data
});
export const createPatientFileFailure = () => ({
  type: CREATE_PATIENT_FILE_FAILURE
});
