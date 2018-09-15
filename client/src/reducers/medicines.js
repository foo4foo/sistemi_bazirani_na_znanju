import {
  FETCH_MEDICINES,
  FETCH_MEDICINES_SUCCESS,
  FETCH_MEDICINES_FAILURE
} from "../actions/medicines";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MEDICINES:
      return {
        ...state,
        error: false,
        data: [],
        message: "",
        pending: true
      };
    case FETCH_MEDICINES_SUCCESS:
      return {
        ...state,
        error: false,
        data: action.data.data.medicines,
        message: "Medicines fetched",
        pending: false
      };
    case FETCH_MEDICINES_FAILURE:
      return {
        ...state,
        error: true,
        data: [],
        message: action.data,
        pending: false
      };
    default:
      return state;
  }
};
