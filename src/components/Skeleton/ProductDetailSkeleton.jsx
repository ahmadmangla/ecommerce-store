import { Button, Col, Container, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDetailSkeleton = () => {
  return (
    <>
      <Container className="py-5">
        <Row>
          <Col md={6}>{<Skeleton height={400} />}</Col>

          <Col md={6}>
            <div className="product-info border-bottom pb-4">
              <h1 className="fw-bold">{<Skeleton width={200} />}</h1>
              <p className="fw-bold fs-3">{<Skeleton width={100} />}</p>
              <p>{<Skeleton count={5} />}</p>
              <div className="add-to-cart d-flex gap-4">
                <p>{<Skeleton />}</p>
                <p>{<Skeleton width={100} />}</p>
              </div>
            </div>
            <div className="category-info">
              <p className="py-3">{<Skeleton />}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetailSkeleton;
