import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/logo.svg";

import "./header.css";

const Header = () => {
  return (
    <>
      <header>
        <Container className="bg-primary" fluid>
          <Container>
            <Row className="justify-content-center py-4">
              <Col md={6}>
                <img src={Logo} alt="TronMart Logo" />
              </Col>
              <Col md={6}></Col>
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
                <NavDropdown title="All Products" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.2">
                    Air Conditioner
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Kitchen Appliances
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    PC and Laptops
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="text-white" href="#home">
                  Home Appliances
                </Nav.Link>
                <Nav.Link className="text-white" href="#link">
                  Audio & Video
                </Nav.Link>
                <Nav.Link className="text-white" href="#link">
                  Refrigerator
                </Nav.Link>
                <Nav.Link className="text-white" href="#link">
                  New Arrivals
                </Nav.Link>
                <Nav.Link className="text-white" href="#link">
                  Todays deal
                </Nav.Link>
                <div className="buttons d-flex gap-3">
                  <Button>
                    <FontAwesomeIcon icon={faCartShopping} />
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
    </>
  );
};

export default Header;
