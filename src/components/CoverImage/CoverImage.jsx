import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./CoverImage.module.css";

const CoverImage = () => {
  return (
    <Container fluid className={`${styles.bgImage}`}>
      <Container>
        <Row className="justify-content-end">
          <Col lg={4} className="bg-white p-4 py-5 ml-auto">
            <h2 className="fs-1 fw-bold">
              The best home entertainment system is here
            </h2>
            <p className="desc">
              Sit diam odio eget rhoncus volutpat est nibh velit posuere
              egestas.
            </p>
            <Button className="text-primary bg-transparent fw-medium border-0 p-0">
              Shop Now
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CoverImage;
