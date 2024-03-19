import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../utils/dummyData";

const initialState = {
  product: products?.slice(0, 5),
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    fetchProducts: (state) => {
      state.product = state.product;
    },
    addProduct: (state, action) => {
      state.product = [...state.products, action.payload];
    },
    deleteProduct: (state, action) => {
      let newData = state.product?.filter((el) => el?.id !== action.payload);
      state.product = newData;
    },
  },
});

export const { fetchProducts, addProduct, deleteProduct } = CartSlice.actions;

export default CartSlice;
