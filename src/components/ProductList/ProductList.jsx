import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../utils/dummydata.js";

const ProductList = () => {
  return (
    <Container>
      <Row className="my-4 justify-content-center">
        {products.map((item) => {
          return (
            <Col key={item.id} md={6} lg={3}>
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
