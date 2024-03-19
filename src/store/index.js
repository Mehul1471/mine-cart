import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../features/cart/cart";

const store = configureStore({
    reducer: {
        cart: CartSlice,
    }
});

export default store;