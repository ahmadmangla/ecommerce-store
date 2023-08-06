import React, { useState } from "react";
import { Nav, Form, Button } from "react-bootstrap";

const SideBar = () => {
  const [priceRange, setPriceRange] = useState(0);

  const handlePriceChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlSearchParams = new URLSearchParams(window.location.search);
    urlSearchParams.set("maxPrice", priceRange);
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${urlSearchParams}`
    );
  };

  return (
    <div className="sidebar py-5 border-end mt-5 p-4">
      <div className="categories">
        <h3 className="fs-5 fw-bold">Categories</h3>
        <Nav className="flex-column my-5">
          <Nav.Item>
            <Nav.Link href="#">Air conditioner</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Audio & video</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Gadgets</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Home appliances</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Kitchen appliances</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">PCs & laptop</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Refrigerator</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Smart home</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="filter-items">
        <h3 className="fs-5 fw-bold mb-5">Filter By Price</h3>

        <Form method="get">
          <Form.Label>Price</Form.Label>
          <Form.Range
            value={priceRange}
            onChange={(e) => handlePriceChange(e.target.value)}
            min={0}
            max={2000}
            step={10}
          />
          <div>${priceRange}</div>
          <Button
            variant="primary"
            className="mt-4"
            type="submit"
            onClick={handleSubmit}
          >
            Apply
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SideBar;
