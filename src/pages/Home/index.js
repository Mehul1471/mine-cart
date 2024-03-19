import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { products } from "../../utils/dummyData";

const Home = () => {
  return (
    <Row>
      {products?.map((el) => {
        return (
          <Col md="4" lg="2">
            <Card >
              <Card.Img variant="top" style={{ height: 150 }} src={el?.img} />
              <Card.Body>
                <Card.Title>{el?.name}</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button>Add To Cart</Button>
              </Card.Footer>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default Home;
