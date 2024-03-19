import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../features/cart/cart";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});
