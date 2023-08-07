import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import SelectQuantity from "../../components/SelectQuantity/SelectQuantity";
import Slider from "../../components/Slider/Slider";
import { products } from "../../utils/dummydata";

const ProductDetail = () => {
  const { slug } = useParams();
  const SingleProduct = products.find((prod) => prod.slug === slug);

  const { title, description, price, images, categoryName, category } =
    SingleProduct;
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
                <SelectQuantity />
                <Button variant="primary rounded-0 inline-block fw-bold px-4">
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
