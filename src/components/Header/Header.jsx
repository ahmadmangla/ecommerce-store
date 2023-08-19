import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logo.svg";
import "./header.css";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

const Header = () => {
  const [toggleCart, setToggleCart] = useState(false);
  const { products } = useSelector((state) => state.cart);

  return (
    <>
      <header>
        <Container className="bg-primary" fluid>
          <Container>
            <Row className="justify-content-between py-4">
              <Col xs={6} md={6}>
                <Link to="/">
                  <img src={Logo} alt="TronMart Logo" />
                </Link>
              </Col>
              <Col xs={6} md={6}>
                <div className="buttons buttons-mobile d-flex gap-3">
                  <Button
                    className="position-relative"
                    onClick={() => setToggleCart(!toggleCart)}
                  >
                    <FontAwesomeIcon icon={faCartShopping} />
                    <Badge pill bg="dark" className="position-absolute">
                      {products.length}
                    </Badge>
                  </Button>
                  <div class="vr"></div>
                  <Nav.Link className="text-white" href="#link">
                    Log In
                  </Nav.Link>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Navbar
          expand="lg"
          className="bg-primary fw-medium text-white border-top"
          data-bs-theme="light"
        >
          <Container className="justify-content-center">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-between flex-grow-1">
                <Link className="text-white p-2" to="/products">
                  All Products
                </Link>
                <Link
                  className="text-white p-2"
                  to="/product-categories/smartphones"
                >
                  Smart Phones{" "}
                </Link>
                <Link
                  className="text-white p-2"
                  to="/product-categories/laptops"
                >
                  Laptops
                </Link>
                <Link
                  className="text-white p-2"
                  to="/product-categories/fragrances"
                >
                  Fragrances
                </Link>
                <Link
                  className="text-white p-2"
                  to="/product-categories/skincare"
                >
                  Beauty & Skincare
                </Link>
                <Link
                  className="text-white p-2"
                  to="/product-categories/groceries"
                >
                  Groceries
                </Link>
                <Link
                  className="text-white p-2"
                  to="/product-categories/home-decoration"
                >
                  Home Decoration
                </Link>
                <div className="buttons d-flex gap-3">
                  <Button
                    className="position-relative"
                    onClick={() => setToggleCart(!toggleCart)}
                  >
                    <FontAwesomeIcon icon={faCartShopping} />
                    <Badge pill bg="dark" className="position-absolute">
                      {products.length}
                    </Badge>
                  </Button>
                  <div class="vr"></div>
                  <Nav.Link className="text-white" href="#link">
                    Log In
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <Cart setToggleCart={setToggleCart} toggleCart={toggleCart} />
      <Toaster />
    </>
  );
};

export default Header;
