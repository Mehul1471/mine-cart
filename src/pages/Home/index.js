import React from "react";
import { Button, Card, Col, Row, Stack } from "react-bootstrap";
import { products } from "../../utils/dummyData";
import { addProduct, deleteProduct } from "../../features/cart/cart";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => ({
    ...state.cart,
  }));

  const addItem = (data) => {
    dispatch(addProduct(data));
  };

  const removeItem = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <Row>
      {products?.map((el) => {
        return (
          <Col md="4" lg="2">
            <Card>
              <Card.Img variant="top" style={{ height: 150 }} src={el?.img} />
              <Card.Body>
                <Card.Title>{el?.name}</Card.Title>
                <h6 className="text-secondary">Price : {el?.price}Rs.</h6>
              </Card.Body>
              <Card.Footer>
                <Stack className=" align-items-center">
                  {product?.map((_el) => _el?.id).includes(el?.id) ? (
                    <Button
                      variant="warning"
                      onClick={() => removeItem(el?.id)}
                    >
                      Remove from cart
                    </Button>
                  ) : (
                    <Button variant="primary" onClick={() => addItem(el)}>
                      Add To Cart
                    </Button>
                  )}
                </Stack>
              </Card.Footer>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default Home;
