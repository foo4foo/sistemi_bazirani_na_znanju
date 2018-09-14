import {
  CREATE_PATIENT_FILE,
  CREATE_PATIENT_FILE_SUCCESS,
  CREATE_PATIENT_FILE_FAILURE,
  SEARCH_PATIENT_FILES,
  SEARCH_PATIENT_FILES_SUCCESS,
  SEARCH_PATIENT_FILES_FAILURE
} from "../actions/patient_files";

export default (
  state = { error: false, data: {}, pending: true, message: "" },
  action
) => {
  switch (action.type) {
    case CREATE_PATIENT_FILE:
      return {
        ...state,
        error: false,
        pending: true,
        data: {},
        message: ""
      };
    case CREATE_PATIENT_FILE_SUCCESS:
      return {
        ...state,
        error: false,
        pending: false,
        data: action.data.data,
        message: "Patient file created"
      };
    case CREATE_PATIENT_FILE_FAILURE:
      return {
        ...state,
        error: true,
        data: action.data,
        pending: false,
        message: ""
      };
    case SEARCH_PATIENT_FILES:
      return {
        ...state,
        error: false,
        data: {},
        pending: false,
        message: ""
      };
    case SEARCH_PATIENT_FILES_SUCCESS:
      return {
        ...state,
        error: false,
        pending: false,
        data: action.data.data,
        message: ""
      };
    case SEARCH_PATIENT_FILES_FAILURE:
      return {
        ...state,
        error: true,
        data: {},
        pending: false,
        message: ""
      };
    default:
      return state;
  }
};
