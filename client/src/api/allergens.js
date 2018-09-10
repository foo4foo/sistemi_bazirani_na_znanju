import axios from "axios";

export const fetchAllergens = async data => {
  return await axios({
    url: "http://localhost:3000/api/allergens",
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: localStorage.getItem("jwt")
    }
  });
};
