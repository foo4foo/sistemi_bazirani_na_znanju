import {
  FETCH_ALLERGENS,
  FETCH_ALLERGENS_SUCCESS,
  FETCH_ALLERGENS_FAILURE,
  REFRESH_ALLERGENS_STORE
} from "../actions/allergens";

import {
  MATCH_ALLERGENS,
  MATCH_ALLERGENS_FAILURE,
  MATCH_ALLERGENS_SUCCESS
} from "../actions/medicines";

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
    case MATCH_ALLERGENS:
      return {
        ...state,
        error: false,
        data: [],
        message: "",
        pending: true
      };
    case MATCH_ALLERGENS_SUCCESS:
      return {
        ...state,
        error: false,
        data: action.data.data.medicines,
        message: "Medicines fetched",
        pending: false
      };
    case MATCH_ALLERGENS_FAILURE:
      return {
        ...state,
        error: true,
        data: [],
        message: action.data,
        pending: false
      };
    case REFRESH_ALLERGENS_STORE:
      return {
        ...state,
        data: [],
        error: false,
        pending: false,
        message: ""
      };
    default:
      return state;
  }
};
