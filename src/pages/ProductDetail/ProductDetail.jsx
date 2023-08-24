import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import SelectQuantity from "../../components/SelectQuantity/SelectQuantity";
import ProductDetailSkeleton from "../../components/Skeleton/ProductDetailSkeleton";
import Slider from "../../components/Slider/Slider";
import { addToCart } from "../../context/cartSlice";
import {
  productsApi,
  useGetProductBySlugQuery,
} from "../../context/Products/productSlice";
import { products } from "../../utils/dummydata";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [counter, setCounter] = useState(1);
  const {
    data: product,
    isLoading = false,
    isError,
  } = useGetProductBySlugQuery(slug);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (isError) {
    return <div>Sorry there was an error!</div>;
  }

  const handleClick = (
    id,
    title,
    description,
    thumbnail,
    quantity,
    price,
    slug
  ) => {
    dispatch(
      addToCart({
        id,
        title,
        description,
        thumbnail,
        quantity,
        price,
        slug,
      })
    );
    toast.success(`${title} added to the cart`);
  };

  return (
    <>
      {isLoading ? (
        <ProductDetailSkeleton />
      ) : (
        <Container className="py-5">
          <Row>
            <Col md={6}>
              <Slider
                images={
                  product?.data && product?.data[0].attributes.images.data
                }
              />
            </Col>

            <Col md={6}>
              <div className="product-info border-bottom pb-4">
                <h1 className="fw-bold">
                  {product?.data && product?.data[0].attributes.title}
                </h1>
                <p className="fw-bold fs-3">
                  {" "}
                  ${product?.data && product?.data[0].attributes.price}.00
                </p>
                <p>
                  {product?.data && product?.data[0].attributes.description}.
                </p>
                <div className="add-to-cart d-flex gap-4">
                  <SelectQuantity counter={counter} setCounter={setCounter} />
                  <Button
                    variant="primary rounded-0 inline-block fw-bold px-4"
                    onClick={() =>
                      handleClick(
                        product?.data && product?.data[0].id,
                        product?.data && product?.data[0].attributes.title,
                        product?.data &&
                          product?.data[0].attributes.description,
                        product?.data &&
                          product?.data[0].attributes.thumbnail.data.attributes
                            .url,
                        counter,
                        product?.data && product?.data[0].attributes.price,
                        product?.data && product?.data[0].attributes.slug
                      )
                    }
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
              <div className="category-info">
                <p className="py-3">
                  Category:{" "}
                  <span>
                    <Link
                      to={`/product-categories/${
                        product?.data && product?.data[0].attributes.category
                      }`}
                    >
                      {product?.data &&
                        product?.data[0].attributes.categoryName}
                    </Link>
                  </span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      )}
      );
    </>
  );
};

export default ProductDetail;
