import { Col, Container, Row, Dropdown } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import PageTitle from "../PageTitle/PageTitle";
import { useGetAllProductsQuery } from "../../context/Products/productSlice";
import { useState } from "react";
import ProductCardSkeleton from "../Skeleton/ProductCardSkeleton";

const ProductList = ({ filteredData, title }) => {
  const [value, setValue] = useState("Default Sorting");
  const [sortBy, setSortBy] = useState("price:desc");
  let { data: product, isLoading } = useGetAllProductsQuery({ sortBy });

  // if (isLoading) {
  //   return <h2>Loading...</h2>;
  // }

  if (filteredData) {
    product = filteredData;
  }

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
      {<PageTitle title={title} />}
      <div className="sorting-wrapper d-flex justify-content-between align-items-center">
        <div className="results-total">
          Showing Total {product?.data?.length} Products
        </div>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">{value}</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={(e) => handleClick(e)}>
              Default Sorting
            </Dropdown.Item>

            <Dropdown.Item onClick={(e) => handleClick(e)}>
              Sort by Latest
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => handleClick(e)}>
              Sort by price: low to high
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => handleClick(e)}>
              Sort by price: high to low
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Row className="my-4 justify-content-center">
        {isLoading
          ? Array.from({ length: 6 }).map(() => {
              return (
                <Col md={6} lg={4}>
                  <ProductCardSkeleton />
                </Col>
              );
            })
          : product?.data &&
            product?.data.map((item) => {
              return (
                <Col key={item.id} md={6} lg={4}>
                  <ProductCard
                    id={item.id}
                    title={item.attributes.title}
                    description={item.attributes.description}
                    price={item.attributes.price}
                    slug={item.attributes.slug}
                    images={item.attributes.images}
                    thumbnail={item.attributes.thumbnail.data.attributes.url}
                  />
                </Col>
              );
            })}
      </Row>
    </Container>
  );
};

export default ProductList;
