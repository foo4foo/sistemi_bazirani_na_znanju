import axios from "axios";

export const createDiagnosis = async data => {
  return await axios({
    url: "http://localhost:3000/api/diagnoses",
    method: "POST",
    data: {
      medicines: data.medicines,
      symptoms: data.symptoms,
      illnesses: data.illnesses,
      patient_id: data.patientId,
      patient_file_id: data.patientFileId
    },
    headers: {
      Accept: "application/json",
      Authorization: localStorage.getItem("jwt")
    }
  });
};
