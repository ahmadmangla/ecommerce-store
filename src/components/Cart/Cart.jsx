import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../context/cartSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import "./cart.css";

const Cart = ({ setToggleCart, toggleCart }) => {
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
    <div
      className={`${
        toggleCart ? `cart position-relative active` : `cart position-relative`
      }`}
    >
      <aside className="vh-100 w-25 d-block bg-white border-left position-fixed z-2 right-0 h-100vh p-3 end-0 top-0 overflow-y-auto">
        <div className="title d-flex justify-content-between align-items-center">
          <h2 className="mb-0 text-primary">Cart</h2>
          <FontAwesomeIcon
            role="button"
            size="2xl"
            icon={faXmarkCircle}
            onClick={() => setToggleCart(!toggleCart)}
          />
        </div>
        <hr />

        {products.length !== 0 ? (
          products.map((item) => {
            return (
              <div className="d-flex gap-3 mb-4 align-items-center position-relative right-10">
                <div className="image">
                  <img
                    className="object-fit-contain"
                    src={item.thumbnail}
                    width={120}
                    height={120}
                    alt=""
                  />
                </div>
                <div className="product-detail ">
                  <div className="title pe-4">
                    <h5>{item.title}</h5>
                  </div>

                  <p className="mb-1">
                    <span className="fw-bold">Quantity: </span>
                    {item.quantity}
                  </p>
                  <p className="mb-1">
                    <span className="fw-bold">Price: </span>${item.price}
                  </p>
                </div>
                <FontAwesomeIcon
                  className="position-absolute end-0 top-0"
                  role="button"
                  size="lg"
                  icon={faXmarkCircle}
                  onClick={() => dispatch(removeItem({ id: item.id }))}
                />
              </div>
            );
          })
        ) : (
          <div>
            <h3>No Products added in the cart</h3>
          </div>
        )}

        <div className="bottom ">
          <div className="subtotal d-flex justify-content-between border-top border-bottom py-3">
            <p className="mb-0">
              <span className="fw-bold">Subtotal: </span>
            </p>
            <p className="mb-0">${getTotal().toFixed(2)}</p>
          </div>
          <div className="buttons">
            <Link to="/cart" className="btn-primary btn w-100 rounded-0 mb-2">
              View Cart
            </Link>
            <Link to="/checkout" className="btn-primary btn w-100 rounded-0">
              Checkout
            </Link>
          </div>
        </div>
      </aside>
      <div
        className="backdrop opacity-75 position-fixed inset-0 bg-black w-100 h-100 z-1 top-0"
        onClick={() => setToggleCart(!toggleCart)}
      ></div>
    </div>
  );
};

export default Cart;
