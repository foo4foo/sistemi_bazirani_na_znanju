export const SEARCH_SYMPTOMS = "symptoms/SEARCH_SYMPTOMS";
export const SEARCH_SYMPTOMS_SUCCESS = "symptoms/SEARCH_SYMPTOMS_SUCCESS";
export const SEARCH_SYMPTOMS_FAILURE = "symptoms/SEARCH_SYMPTOMS_FAILURE";

export const searchSymptoms = payload => ({
  type: SEARCH_SYMPTOMS,
  payload
});

export const searchSymptomsSuccess = payload => ({
  type: SEARCH_SYMPTOMS_SUCCESS,
  payload
});

export const searchSymptomsFailure = () => ({
  type: SEARCH_SYMPTOMS_FAILURE
});
