export default(state = [], payload) => {
  switch(payload) {
    case 'SIGN_IN':
      return [
        ...state,
        payload.data
      ]
    default:
      return state;

  }
};
