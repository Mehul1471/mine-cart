import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../../utils/dummyData";

const Cart = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => ({ ...state.cart }));

  console.log("product :", product);

  return (
    <div className="d-flex flex-column">
      <h3 className="text-secondary">Products</h3>
      {products?.map((el) => {
        return (
          <div className="d-flex border rounded-2 border-secondary p-2 mb-2">
            <img src={el?.img} alt="not found" />
            <div className="d-flex flex-column gap-1">
              <h5>{el?.title}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
