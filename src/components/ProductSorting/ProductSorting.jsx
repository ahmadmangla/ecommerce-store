import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const ProductSorting = ({ allProducts, setProducts }) => {
  const [value, setValue] = useState("Default Sorting");

  function sortData(sort) {
    setValue(sort);
    const newSortedProducts = [...allProducts];
    if (sort === "Default Sorting") {
      const sortedData = newSortedProducts.sort((a, b) => a.id - b.id);
      setProducts(sortedData);
    } else if (sort === "Sort by price: low to high") {
      // Create a copy of the products array
      const sortedData = newSortedProducts.sort((a, b) => a.price - b.price);
      setProducts(sortedData);
    } else if (sort === "Sort by price: high to low") {
      const sortedData = newSortedProducts.sort((a, b) => b.price - a.price);
      setProducts(sortedData);
    } else if (sort === "Sort by Latest") {
      const sortedData = newSortedProducts.sort((a, b) => a.id - b.id);
      setProducts(sortedData);
    }
  }

  return (
    <div className="sorting-wrapper d-flex justify-content-between align-items-center">
      <div className="results-total">
        Showing Total {allProducts.length} Products
      </div>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">{value}</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={(e) => sortData(e.target.innerHTML)}>
            Default Sorting
          </Dropdown.Item>

          <Dropdown.Item onClick={(e) => sortData(e.target.innerHTML)}>
            Sort by Latest
          </Dropdown.Item>
          <Dropdown.Item onClick={(e) => sortData(e.target.innerHTML)}>
            Sort by price: low to high
          </Dropdown.Item>
          <Dropdown.Item onClick={(e) => sortData(e.target.innerHTML)}>
            Sort by price: high to low
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ProductSorting;
