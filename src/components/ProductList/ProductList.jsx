import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../utils/dummydata.js";
import { useEffect, useState } from "react";
import PageTitle from "../PageTitle/PageTitle";
import ProductSorting from "../ProductSorting/ProductSorting";

const ProductList = (props) => {
  const [allProducts, setProducts] = useState(products);

  useEffect(() => {
    if (props.categories) {
      setProducts(props.categories);
    }
  }, [props.categories]);

  return (
    <Container className="py-5">
      <PageTitle title={props.title} />
      <ProductSorting allProducts={allProducts} setProducts={setProducts} />
      <Row className="my-4 justify-content-center">
        {allProducts.map((item) => {
          return (
            <Col key={item.id} md={6} lg={4}>
              <Link to={`${item.slug}`}>
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
