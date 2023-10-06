import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    saveCart: (state, action) => {
      state.cartData = [...state.cartData, action.payload];
    },
    updateCart: (state, action) => {
      const updatedBookIndex = state.cartData.findIndex(
        (item) => item.bookId === action.payload.bookId
      );

      if (updatedBookIndex !== -1) {
        state.cartData[updatedBookIndex] = action.payload;
      }
    },
    deleteCart: (state, action) => {
      state.cartData = state.cartData.filter(
        (item) => item.bookId !== action.payload.bookId
      );
    },
  },
});

export const { saveCart, updateCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
