import { Col, Container, Row } from "react-bootstrap";
import { Outlet, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PageTitle from "../PageTitle/PageTitle";
import SideBar from "../SideBar/SideBar";

const SideBarLayout = () => {
  let urlPath = window.location.pathname.split("");
  urlPath.shift();
  const Title = urlPath.join("");
  console.log(Title);

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
            <Col className="py-5" md={9}>
              <PageTitle title={Title} />
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
