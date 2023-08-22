import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const ProductSorting = ({ sortData }) => {
  const [value, setValue] = useState("Default Sorting");

  function sortData(sort) {
    setValue(sort);
    // Create a copy of the products array

    if (sortData) {
      const newSortedProducts = [...sortData.data];

      console.log(newSortedProducts);
      if (sort === "Default Sorting") {
        const sortedData = newSortedProducts.sort((a, b) => a.id - b.id);
        sortData = sortedData;
      } else if (sort === "Sort by price: low to high") {
        const sortedData = newSortedProducts.sort(
          (a, b) => a.attributes.price - b.attributes.price
        );
        sortData = sortedData;
      } else if (sort === "Sort by price: high to low") {
        const sortedData = newSortedProducts.sort(
          (a, b) => b.attributes.price - a.attributes.price
        );
        sortData = sortedData;
      } else if (sort === "Sort by Latest") {
        const sortedData = newSortedProducts.sort((a, b) => a.id - b.id);
        sortData = sortedData;
      }
    }
  }

  return (
    <div className="sorting-wrapper d-flex justify-content-between align-items-center">
      <div className="results-total">
        Showing Total {sortData?.data?.length} Products
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
