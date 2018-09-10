import {
  FETCH_ALLERGENS,
  FETCH_ALLERGENS_SUCCESS,
  FETCH_ALLERGENS_FAILURE
} from "../actions/allergens";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALLERGENS:
      return {
        ...state,
        error: false,
        message: null,
        pending: true,
        data: []
      };
    case FETCH_ALLERGENS_SUCCESS:
      return {
        ...state,
        error: false,
        message: "Allergens fetched.",
        pending: false,
        data: action.data.data.allergens
      };
    case FETCH_ALLERGENS_FAILURE:
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
