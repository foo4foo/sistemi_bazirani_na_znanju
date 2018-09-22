import {
  CREATE_DIAGNOSIS,
  CREATE_DIAGNOSIS_SUCCESS,
  CREATE_DIAGNOSIS_FAILURE,
  CREATE_DIAGNOSIS_ALLERGENS_FOUND
} from "../actions/diagnoses";

export default (
  state = { data: {}, error: false, message: "", allergenMedicines: [] },
  action
) => {
  switch (action.type) {
    case CREATE_DIAGNOSIS:
      return {
        ...state,
        error: false,
        pending: true,
        data: {},
        allergenMedicines: [],
        message: ""
      };
    case CREATE_DIAGNOSIS_SUCCESS:
      return {
        ...state,
        error: false,
        pending: false,
        data: action.data.data.diagnosis,
        allergenMedicines: [],
        message: "Diagnosis created."
      };
    case CREATE_DIAGNOSIS_ALLERGENS_FOUND:
      return {
        ...state,
        allergenMedicines: action.data.data,
        data: {},
        error: false,
        pending: false,
        message: "Patient is allergic to these medicines"
      };
    case CREATE_DIAGNOSIS_FAILURE:
      return {
        ...state,
        error: true,
        pending: false,
        data: {},
        allergenMedicines: [],
        message: action.data.data.message
      };
    default:
      return state;
  }
};
