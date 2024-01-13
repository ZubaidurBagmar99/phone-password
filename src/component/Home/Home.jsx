import { Button, Card, Col, Row } from "react-bootstrap";
import SideNav from "../SideNav/SideNav";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const products = useLoaderData();
//   const { product_name, details, image } = products;
  return (
    
    <div className="d-flex ">
      <SideNav></SideNav>
      <Row xs={1} md={2} lg={6}>
        {products.map((product) => (
          <Col key={product.id}>
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.product_name}</Card.Title>
                <Card.Text>{product.details}</Card.Text>
                <Button variant="danger">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
