export const redirectToHomePage = () => {
  window.location.replace('/');
}

export const setToken = (token) => {
  localStorage.setItem('jwt', token);
}
