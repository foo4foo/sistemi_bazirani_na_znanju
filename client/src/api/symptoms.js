import axios from "axios";

export const searchSymptoms = async data => {
  return await axios({
    url: `http://localhost:3000/api/symptoms/search?name=${data.name}&page=${
      data.page
    }`,
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: localStorage.getItem("jwt")
    }
  });
};
