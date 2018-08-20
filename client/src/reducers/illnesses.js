import {
  SEARCH_ILLNESSES,
  SEARCH_ILLNESSES_SUCCESS,
  SEARCH_ILLNESSES_FAILURE
} from "../actions/illnesses";

export default (state = {}, action) => {
  switch (action.type) {
    case SEARCH_ILLNESSES:
      return {
        ...state,
        error: false,
        message: null,
        pending: true,
        data: []
      };
    case SEARCH_ILLNESSES_SUCCESS:
      return {
        ...state,
        error: false,
        message: "Illnesses fetched.",
        pending: false,
        data: action.data.data.illnesses,
        page: parseInt(action.data.data.page, 10)
      };
    case SEARCH_ILLNESSES_FAILURE:
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
