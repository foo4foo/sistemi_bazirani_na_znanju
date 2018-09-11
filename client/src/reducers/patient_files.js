import {
  CREATE_PATIENT_FILE,
  CREATE_PATIENT_FILE_SUCCESS,
  CREATE_PATIENT_FILE_FAILURE
} from "../actions/patient_files";

export default (state = { error: false, data: {}, pending: true }, action) => {
  switch (action.type) {
    case CREATE_PATIENT_FILE:
      return {
        ...state,
        error: false,
        pending: true,
        data: {}
      };
    case CREATE_PATIENT_FILE_SUCCESS:
      return {
        ...state,
        error: false,
        pending: false,
        data: action.data.data
      };
    case CREATE_PATIENT_FILE_FAILURE:
      return {
        ...state,
        error: true,
        data: action.data,
        pending: false
      };
    default:
      return state;
  }
};
