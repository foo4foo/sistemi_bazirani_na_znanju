import axios from "axios";

export const fetchMedicines = async illnessId => {
  return await axios({
    url: `http://localhost:3000/api/illnesses/${illnessId}/medicines`,
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: localStorage.getItem("jwt")
    }
  });
};
