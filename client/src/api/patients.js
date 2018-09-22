import axios from "axios";

export const searchPatients = async pattern => {
  return await axios({
    url: `http://localhost:3000/api/patients/search?pattern=${pattern}`,
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: localStorage.getItem("jwt")
    }
  });
};

export const checkStatus = async data => {
  return await axios({
    url: `http://localhost:8080/check_patient_stats`,
    method: "POST",
    data,
    headers: {
      Accept: "application/json",
      Authorization: localStorage.getItem("jwt")
    }
  });
};
