import { Col, Container, Row } from "react-bootstrap";
import Logo from "../../assets/logo.svg";
import styles from "./Footer.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import PaymentIcons from "../../assets/images/payment-icons.png";

const Footer = () => {
  return (
    <footer>
      <Container className="py-5">
        <Row className="">
          <Col md={3} xs={6} className="mb-4">
            <img className={styles.filterLogo} src={Logo} alt="Tronmart Logo" />
          </Col>
          <Col md={3} xs={6} className="mb-4">
            <h4 className="fw-bold fs-5 mb-5">Shop</h4>

            <ListGroup as="ul" class="list-group border-0">
              <ListGroup.Item as="li" className="border-0 p-0 ">
                <a className="text-decoration-none "> Hot deals</a>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="border-0 p-0">
                <a className="text-decoration-none"> Categories</a>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="border-0 p-0">
                <a className="text-decoration-none"> Brands</a>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="border-0 p-0">
                <a className="text-decoration-none"> Rebates</a>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="border-0 p-0">
                <a className="text-decoration-none"> Weekly deals</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3} xs={6} className="mb-4">
            <h4 className="fw-bold fs-5 mb-5">Need help?</h4>
            <ListGroup as="ul" class="list-group border-0">
              <ListGroup.Item as="li" className="border-0 p-0 ">
                <a className="text-decoration-none ">Contact</a>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="border-0 p-0">
                <a className="text-decoration-none">Order tracking</a>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="border-0 p-0">
                <a className="text-decoration-none"> FAQs</a>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="border-0 p-0">
                <a className="text-decoration-none"> Return policy</a>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="border-0 p-0">
                <a className="text-decoration-none"> Privacy policy</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3} xs={6} className="mb-4">
            <h4 className="fw-bold fs-5 mb-5">Contact</h4>
            <ListGroup as="ul" class="list-group border-0">
              <ListGroup.Item as="li" className="border-0 p-0 ">
                <a className="text-decoration-none ">
                  123 Fifth Avenue, New York, NY 10160
                </a>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="border-0 p-0">
                <a className="text-decoration-none">contact@info.com</a>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="border-0 p-0">
                <a className="text-decoration-none"> 929-242-6868</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Container fluid className="bottom-bar py-4 bg-dark">
        <Container>
          <Row>
            <Col md={6}>
              <p className="mb-0 small text-white">
                © 2023 Electronic Store. Powered by Electronic Store
              </p>
            </Col>
            <Col md={6}>
              <img
                className="ms-auto d-block"
                src={PaymentIcons}
                alt="Payment Icons"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;
