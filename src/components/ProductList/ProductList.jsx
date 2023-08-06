import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../utils/dummydata.js";

const ProductList = () => {
  return (
    <Container className="py-5">
      <Row className="my-4 justify-content-center">
        {products.map((item) => {
          return (
            <Col key={item.id} md={6} lg={4}>
              <Link to={item.slug}>
                <ProductCard {...item} />
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductList;
