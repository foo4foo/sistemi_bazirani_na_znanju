export const CREATE_PATIENT_FILE = "patient_files/CREATE_PATIENT_FILE";
export const CREATE_PATIENT_FILE_SUCCESS =
  "patient_files/CREATE_PATIENT_FILE_SUCCESS";
export const CREATE_PATIENT_FILE_FAILURE =
  "patient_files/CREATE_PATIENT_FILE_FAILURE";
export const SEARCH_PATIENT_FILES = "patient_files/SEARCH_PATIENT_FILES";
export const SEARCH_PATIENT_FILES_SUCCESS =
  "patient_files/SEARCH_PATIENT_FILES_SUCCESS";
export const SEARCH_PATIENT_FILES_FAILURE =
  "patient_files/SEARCH_PATIENT_FILES_FAILURE";

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

export const searchPatientFiles = patientId => ({
  type: SEARCH_PATIENT_FILES,
  payload: patientId
});

export const searchPatientFilesSuccess = patientId => ({
  type: SEARCH_PATIENT_FILES_SUCCESS,
  payload: patientId
});

export const searchPatientFilesFailure = () => ({
  type: SEARCH_PATIENT_FILES_FAILURE
});
