import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/user_slice";
import cartReducer from "./slice/cart_slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;