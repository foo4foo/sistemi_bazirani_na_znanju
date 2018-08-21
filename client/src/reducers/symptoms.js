import {
  SEARCH_SYMPTOMS,
  SEARCH_SYMPTOMS_SUCCESS,
  SEARCH_SYMPTOMS_FAILURE
} from "../actions/symptoms";

export default (state = {}, action) => {
  switch (action.type) {
    case SEARCH_SYMPTOMS:
      return {
        ...state,
        error: false,
        message: null,
        pending: true,
        data: []
      };
    case SEARCH_SYMPTOMS_SUCCESS:
      return {
        ...state,
        error: false,
        message: "Symptoms fetched.",
        pending: false,
        data: action.data.data.symptoms,
        page: parseInt(action.data.data.page, 10)
      };
    case SEARCH_SYMPTOMS_FAILURE:
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
