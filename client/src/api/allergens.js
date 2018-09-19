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

export const matchMedicinesAgainsAllergens = async data => {
  return await axios({
    url: "http://localhost:3000/api/medicines/match_against_allergens",
    method: "POST",
    data: {
      medicines: data.medicines,
      patient_id: data.patientId
    },
    headers: {
      Accept: "application/json",
      Authorization: localStorage.getItem("jwt")
    }
  });
};
