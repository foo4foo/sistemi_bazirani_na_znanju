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

export const matchMedicinesAgainsAllergens = async medicines => {
  return await axios({
    url: "http://localhost:3000/api/medicines/match_agains_allergens",
    method: "POST",
    data: {
      medicines
    },
    headers: {
      Accept: "application/json",
      Authorization: localStorage.getItem("jwt")
    }
  });
};
