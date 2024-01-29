import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import PageTitle from "../PageTitle/PageTitle";
import { useGetAllProductsQuery } from "../../context/Products/productSlice";
import ProductCardSkeleton from "../Skeleton/ProductCardSkeleton";
import ProductSorting from "../ProductSorting/ProductSorting";
import { useState } from "react";

const ProductList = ({ title, filteredData }) => {
  const [value, setValue] = useState("Default Sorting");
  let { data, isLoading, error, isSuccess, isFetching } = useGetAllProductsQuery();

  if (filteredData) {
    data = filteredData;
  }

  if (isSuccess && data) {
    data = [...data].sort((a, b) => {
      if (value === "Sort by price: low to high") {
        return a.price - b.price;
      } else if (value === "Sort by price: high to low") {
        return b.price - a.price;
      } else {
        return 0; // No sorting
      }
    });
  }

  if (error) {
    return <>Oh no, there was an error</>;
  }

  return (
    <Container className="py-5">
      {<PageTitle title={filteredData ? data[0].category : title} />}
      <div className="sorting-wrapper d-flex justify-content-between align-items-center">
        <div className="results-total">Showing Total {data?.length} Products</div>
        <ProductSorting value={value} setValue={setValue} />
      </div>
      <Row className="my-4 justify-content-center">
        {isLoading || isFetching ? (
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
            <Col md={6} lg={4}>
              <ProductCardSkeleton />
            </Col>
            <Col md={6} lg={4}>
              <ProductCardSkeleton />
            </Col>
          </>
        ) : (
          data.map((item) => {
            return (
              <>
                <Col key={item.id} md={6} lg={4}>
                  <ProductCard {...item} />
                </Col>
              </>
            );
          })
        )}
      </Row>
    </Container>
  );
};

export default ProductList;
