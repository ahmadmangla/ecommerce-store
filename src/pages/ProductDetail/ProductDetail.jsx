import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { toast } from "react-hot-toast";

import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import SelectQuantity from "../../components/SelectQuantity/SelectQuantity";
import Slider from "../../components/Slider/Slider";
import { addToCart } from "../../context/cartSlice";
import { products } from "../../utils/dummydata";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [counter, setCounter] = useState(1);
  const SingleProduct = products.find((prod) => prod.slug === slug);
  const {
    id,
    title,
    description,
    price,
    images,
    categoryName,
    category,
    thumbnail,
  } = SingleProduct;

  const handleClick = ({
    id,
    title,
    description,
    thumbnail,
    quantity,
    price,
  }) => {
    dispatch(
      addToCart({
        id,
        title,
        description,
        thumbnail,
        quantity,
        price,
      })
    );
    toast.success(`${title} added to the cart`);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Container className="py-5">
        <Row>
          <Col md={6}>
            <Slider images={images} />
          </Col>

          <Col md={6}>
            <div className="product-info border-bottom pb-4">
              <h1 className="fw-bold">{title}</h1>
              <p className="fw-bold fs-3"> ${price}.00</p>
              <p>{description}.</p>
              <div className="add-to-cart d-flex gap-4">
                <SelectQuantity counter={counter} setCounter={setCounter} />
                <Button
                  variant="primary rounded-0 inline-block fw-bold px-4"
                  onClick={() =>
                    handleClick({
                      id,
                      title,
                      description,
                      thumbnail,
                      quantity: counter,
                      price,
                    })
                  }
                >
                  Add to Cart
                </Button>
              </div>
            </div>
            <div className="category-info">
              <p className="py-3">
                Category:
                <span>
                  <Link to={`/product-categories/${category}`}>
                    {categoryName}
                  </Link>
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
