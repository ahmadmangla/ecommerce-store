import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { removeItem } from "../../context/cartSlice";

const CartPage = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const getTotal = () => {
    let total = 0;
    products.forEach((element) => {
      total = total + element.price * element.quantity;
    });

    return total;
  };
  return (
    <Container className="my-4">
      <h2 className="fw-bold py-2">Cart</h2>
      <Row>
        <Col md={8}>
          {products.length !== 0 ? (
            <Table responsive>
              <thead className="bg-grey border">
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map((item) => {
                  return (
                    <tr className="position-relative border" key={item.id}>
                      <td className="align-middle">
                        <img
                          className="object-fit-contain"
                          src={item.thumbnail}
                          width={120}
                          height={120}
                          alt=""
                        />
                      </td>
                      <td className="align-middle">
                        <Link to={`/products/${item.slug}`}>{item.title}</Link>
                      </td>
                      <td className="align-middle">${item.price.toFixed(2)}</td>
                      <td className="align-middle">{item.quantity}</td>
                      <td className="align-middle">
                        ${(item.quantity * item.price).toFixed(2)}
                      </td>
                      <td className="align-middle">
                        <FontAwesomeIcon
                          style={{ marginRight: "5px" }}
                          className=""
                          role="button"
                          size="lg"
                          icon={faXmarkCircle}
                          onClick={() => dispatch(removeItem({ id: item.id }))}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          ) : (
            <div>
              <h3>No Products added in the cart</h3>
            </div>
          )}
        </Col>
        <Col md={4}>
          <div className="cart-total ">
            <h5 className="fw-bold py-3 px-3 mb-0 border">Cart totals</h5>
            <div className="subtotal px-4 py-4 border">
              <div className="d-flex justify-content-between mb-3">
                <p className="mb-0">
                  <span className="fw-bold">Subtotal: </span>
                </p>
                <p className="mb-0">${getTotal().toFixed(2)}</p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <p className="mb-0">
                  <span className="fw-bold">Total: </span>
                </p>
                <p className="mb-0">${getTotal().toFixed(2)}</p>
              </div>
              <Link to="/checkout" className="btn-primary btn w-100 rounded-0">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
