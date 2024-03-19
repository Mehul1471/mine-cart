import React, { useState } from "react";
import { Button, Card, Col, Row, Stack } from "react-bootstrap";
import { products } from "../../utils/dummyData";
import { addProduct, deleteProduct } from "../../features/cart/cart";
import { useDispatch, useSelector } from "react-redux";

const filterBy = [
  { title: "Mobile", value: "mobile" },
  { title: "Laptop", value: "laptop" },
  { title: "Shoes", value: "shoes" },
];

const Home = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => ({
    ...state.cart,
  }));
  const [listProducts, setListProducts] = useState(products);
  const [isFilterData, setIsFilterData] = useState(false);

  const addItem = (data) => {
    dispatch(addProduct(data));
  };

  const removeItem = (id) => {
    dispatch(deleteProduct(id));
  };

  const filterData = (type) => {
    if (type) {
      console.log("type :", type);
      setIsFilterData(true);
      let newData = structuredClone(products);
      newData = newData.filter((el) => el?.category === type);
      console.log("newData :", newData);
      setListProducts(newData);
    }
  };

  return (
    <div className="d-flex flex-column gap-2">
      <div className="d-flex w-100 gap-2 align-items-center">
        <h6>Filter By :</h6>
        {filterBy?.map((el) => {
          return (
            <Button
              onClick={() => filterData(el?.value)}
              key={el?.title}
              variant="secondary"
            >
              {el?.title}
            </Button>
          );
        })}
        {isFilterData ? (
          <p
            className="m-0 text-primary"
            onClick={() => {
              setListProducts(products);
              setIsFilterData(false);
            }}
            style={{ cursor: "pointer" }}
          >
            Clear Filter
          </p>
        ) : null}
      </div>
      <Row>
        {listProducts?.map((el) => {
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
    </div>
  );
};

export default Home;
