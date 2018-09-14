export const SEARCH_ILLNESSES = "illnesses/SEARCH_ILLNESSES";
export const SEARCH_ILLNESSES_SUCCESS = "illnesses/SEARCH_ILLNESSES_SUCCESS";
export const SEARCH_ILLNESSES_FAILURE = "illnesses/SEARCH_ILLNESSES_FAILURE";
export const MATCH_ILLNESSES = "illnesses/MATCH_ILLNESSES";
export const MATCH_ILLNESSES_SUCCESS = "illnesses/MATCH_ILLNESSES_SUCCESS";
export const MATCH_ILLNESSES_FAILURE = "illnesses/MATCH_ILLNESSES_FAILURE";

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

export const matchIllnesses = payload => ({
  type: MATCH_ILLNESSES,
  payload
});

export const matchIllnessesSuccess = payload => ({
  type: MATCH_ILLNESSES_SUCCESS,
  payload
});

export const matchIllnessesFailure = payload => ({
  type: MATCH_ILLNESSES_FAILURE
});
