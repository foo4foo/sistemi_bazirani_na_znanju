import {
  SEARCH_PATIENTS,
  SEARCH_PATIENTS_SUCCESS,
  SEARCH_PATIENTS_FAILURE,
  CHECK_STATUS,
  CHECK_STATUS_SUCCESS,
  CHECK_STATUS_FAILURE
} from "../actions/patients";

export default (
  state = {
    data: [],
    message: "",
    loading: false,
    error: false,
    rapidHeartRate: false,
    oxygenProblems: false,
    dialysisNeeded: false
  },
  action
) => {
  switch (action.type) {
    case SEARCH_PATIENTS:
      return {
        ...state,
        data: [],
        loading: true,
        error: false,
        oxygenProblems: false,
        dialysisNeeded: false,
        rapidHeartRate: false
      };
    case SEARCH_PATIENTS_SUCCESS:
      return {
        ...state,
        data: action.data.data.patients,
        message: "Patients fetched successfuly",
        error: false,
        loading: false,
        oxygenProblems: false,
        dialysisNeeded: false,
        rapidHeartRate: false
      };
    case SEARCH_PATIENTS_FAILURE:
      return {
        ...state,
        error: true,
        data: [],
        message: "Failed to fetch patients",
        loading: false,
        oxygenProblems: false,
        dialysisNeeded: false,
        rapidHeartRate: false
      };
    case CHECK_STATUS:
      return {
        ...state,
        oxygenProblems: false,
        dialysisNeeded: false,
        rapidHeartRate: false
      };
    case CHECK_STATUS_SUCCESS:
      return {
        ...state,
        oxygenProblems: action.data.data.oxygenProblems,
        dialysisNeeded: action.data.data.dialysisNeeded,
        rapidHeartRate: action.data.data.rapidHeartRate
      };
    case CHECK_STATUS_FAILURE:
      return {
        ...state,
        oxygenProblems: false,
        dialysisNeeded: false,
        rapidHeartRate: false
      };
    default:
      return state;
  }
};
