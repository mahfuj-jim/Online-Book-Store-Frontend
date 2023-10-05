export const addUser = (userData) => {
  return {
    type: "SAVE_USER",
    payload: userData,
  };
};