import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import SelectQuantity from "../../components/SelectQuantity/SelectQuantity";
import ProductDetailSkeleton from "../../components/Skeleton/ProductDetailSkeleton";
import Slider from "../../components/Slider/Slider";
import { addToCart } from "../../context/cartSlice";
import { useGetProductBySlugQuery } from "../../context/Products/productSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [counter, setCounter] = useState(1);
  const { data, isLoading, isError } = useGetProductBySlugQuery(slug);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (isError) {
    return <div>Sorry there was an error!</div>;
  }

  const handleClick = (id, title, description, thumbnail, quantity, price, slug) => {
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
              <Slider images={data && data.images} />
            </Col>

            <Col md={6}>
              <div className="product-info border-bottom pb-4">
                <h1 className="fw-bold">{data && data.title}</h1>
                <p className="fw-bold fs-3"> ${data && data.price}.00</p>
                <p>{data && data.description}.</p>
                <div className="add-to-cart d-flex gap-4">
                  <SelectQuantity counter={counter} setCounter={setCounter} />
                  <Button
                    variant="primary rounded-0 inline-block fw-bold px-4"
                    onClick={() => handleClick(data && data.id, data && data.title, data && data.description, data && data.url, counter, data && data.price, data && data.slug)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
              <div className="category-info">
                <p className="py-3">
                  Category:{" "}
                  <span>
                    <Link to={`/product-categories/${data && data.category}`}>{data && data.category}</Link>
                  </span>
                </p>
              </div>
            </Col>
          </Row>
          <script type="text/javascript" src="http://localhost:1338/plugins/strapi-stripe/static/stripe.js">
            {" "}
          </script>
        </Container>
      )}
      );
    </>
  );
};

export default ProductDetail;
