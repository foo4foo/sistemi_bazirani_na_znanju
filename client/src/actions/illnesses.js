export const SEARCH_ILLNESSES = "illnesses/SEARCH_ILLNESSES";
export const SEARCH_ILLNESSES_SUCCESS = "illnesses/SEARCH_ILLNESSES_SUCCESS";
export const SEARCH_ILLNESSES_FAILURE = "illnesses/SEARCH_ILLNESSES_FAILURE";

export const searchIllnesses = payload => ({
  type: SEARCH_ILLNESSES,
  payload
});

export const searchIllnessesSuccess = payload => ({
  type: SEARCH_ILLNESSES_SUCCESS,
  payload
});

export const searchIllnessesFailure = () => ({
  type: SEARCH_ILLNESSES_FAILURE
});
