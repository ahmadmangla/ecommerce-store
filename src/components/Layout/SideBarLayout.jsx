import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PageTitle from "../PageTitle/PageTitle";
import SideBar from "../SideBar/SideBar";

const SideBarLayout = () => {
  return (
    <>
      <main>
        <Header />
        <Container className="w-100">
          <Row>
            <Col md={3}>
              <aside className="w-20 position-sticky top-0">
                <SideBar />
              </aside>
            </Col>
            <Col md={9}>
              <Outlet />
            </Col>
          </Row>
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default SideBarLayout;
