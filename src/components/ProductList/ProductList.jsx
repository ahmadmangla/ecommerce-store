import { Col, Container, Row, Dropdown } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import PageTitle from "../PageTitle/PageTitle";
import { useGetAllProductsQuery } from "../../context/Products/productSlice";
import { useState } from "react";
import ProductCardSkeleton from "../Skeleton/ProductCardSkeleton";

const ProductList = ({ title, filteredData }) => {
  const [value, setValue] = useState("Default Sorting");
  const [sortBy, setSortBy] = useState("price:desc");
  let { data, isLoading, error } = useGetAllProductsQuery();

  if (filteredData) {
    if (!isLoading && !error) {
      data = filteredData;
    }
  }

  // console.log(data?.products);

  const handleClick = (e) => {
    setValue(e.target.innerHTML);
    if (value === "Sort by price: high to low") {
      setSortBy("price:desc");
    } else if (value === "Default Sorting") {
      setSortBy("desc");
    } else if (value === "Sort by price: low to high") {
      setSortBy("price");
    }
  };

  return (
    <Container className="py-5">
      {<PageTitle title={filteredData ? data.products[0].category : title} />}
      <div className="sorting-wrapper d-flex justify-content-between align-items-center">
        <div className="results-total">Showing Total {data?.products?.length} Products</div>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">{value}</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={(e) => handleClick(e)}>Default Sorting</Dropdown.Item>

            <Dropdown.Item onClick={(e) => handleClick(e)}>Sort by Latest</Dropdown.Item>
            <Dropdown.Item onClick={(e) => handleClick(e)}>Sort by price: low to high</Dropdown.Item>
            <Dropdown.Item onClick={(e) => handleClick(e)}>Sort by price: high to low</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Row className="my-4 justify-content-center">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>
            <Col md={6} lg={4}>
              <ProductCardSkeleton />
            </Col>
            <Col md={6} lg={4}>
              <ProductCardSkeleton />
            </Col>
            <Col md={6} lg={4}>
              <ProductCardSkeleton />
            </Col>
            <Col md={6} lg={4}>
              <ProductCardSkeleton />
            </Col>
          </>
        ) : data ? (
          data.products.map((item) => {
            return (
              <>
                <Col key={item.id} md={6} lg={4}>
                  <ProductCard id={item.id} title={item.title} description={item.description} price={item.price} slug={item.id} images={item.images} thumbnail={item.thumbnail} />
                </Col>
              </>
            );
          })
        ) : null}
      </Row>
    </Container>
  );
};

export default ProductList;
