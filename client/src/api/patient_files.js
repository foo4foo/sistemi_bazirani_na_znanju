import axios from "axios";

export const searchPatientFiles = async patientId => {
  return await axios({
    url: `http://localhost:3000/api/patient_files/${patientId}`,
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: localStorage.getItem("jwt")
    }
  });
};

export const createPatientFile = async data => {
  return await axios({
    url: `http://localhost:3000/api/patient_files`,
    method: "POST",
    data: {
      patient_attributes: {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        weight: data.weight,
        height: data.height,
        birth_date: data.birthDate
      },
      allergens: data.allergens
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwt")
    }
  });
};
