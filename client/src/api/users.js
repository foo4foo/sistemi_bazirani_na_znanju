import axios from 'axios';

export const login = async (data) => {
  return await axios({
    url: `http://localhost:3000/api/users/session/sign_in`,
    method: 'POST',
    data: {
      email: data.username,
      password: data.password
    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
};
