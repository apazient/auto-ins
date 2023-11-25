export const errorMessage = (payload) => {
  const {
    payload: { message },
  } = payload;
  return message;
};
