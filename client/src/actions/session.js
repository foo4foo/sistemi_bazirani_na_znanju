export const login = (data) => {
  console.log(data);
  return {
    type: 'SIGN_IN',
    data
  }
};
