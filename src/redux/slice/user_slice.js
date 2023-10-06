import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.userData = action.payload;
    },
    removeUser: (state) => {
      state.userData = {};
    },
  },
});

export const { saveUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
