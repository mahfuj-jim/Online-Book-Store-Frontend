const initialState = {
  userData: {},
};

function userReducers(state = initialState, action) {
  switch (action.type) {
    case "SAVE_USER":
      return { userData: action.payload };

    default:
      return state;
  }
}
export default userReducers;
