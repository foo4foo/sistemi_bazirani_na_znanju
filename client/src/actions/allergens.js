export const FETCH_ALLERGENS = "allergens/FETCH_ALLERGENS";
export const FETCH_ALLERGENS_SUCCESS = "allergens/FETCH_ALLERGENS_SUCCESS";
export const FETCH_ALLERGENS_FAILURE = "allergens/FETCH_ALLERGENS_FAILURE";

export const fetchAllergens = () => ({
  type: FETCH_ALLERGENS
});

export const fetchAllergensSuccess = () => ({
  type: FETCH_ALLERGENS_SUCCESS
});

export const fetchAllergensFailure = () => ({
  type: FETCH_ALLERGENS_FAILURE
});
