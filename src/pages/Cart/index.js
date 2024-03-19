import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../features/cart/cart";

const Cart = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => ({
    ...state.cart,
  }));

  const removeItem = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="d-flex flex-column gap-3 w-100">
      <h3 className="text-secondary">Products</h3>
      {product?.map((el) => {
        return (
          <div className="d-flex border rounded-2 border-secondary p-2 mb-2 gap-3 w-75">
            <img height={70} width={70} src={el?.img} alt="not found" />
            <div className="d-flex flex-column gap-1">
              <h6>{el?.name}</h6>
              <p className="text-secondary m-0">{el?.description}</p>
              <p className="m-0">Price : {el?.price}Rs.</p>
              <Button
                variant="secondary"
                style={{ maxWidth: 200 }}
                onClick={() => removeItem(el?.id)}
              >
                Remove Item
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
