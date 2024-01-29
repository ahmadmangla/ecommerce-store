import Dropdown from "react-bootstrap/Dropdown";

const ProductSorting = ({ value, setValue }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">{value}</Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={(e) => setValue(e.target.innerHTML)}>Default Sorting</Dropdown.Item>

        <Dropdown.Item onClick={(e) => setValue(e.target.innerHTML)}>Sort by Latest</Dropdown.Item>
        <Dropdown.Item onClick={(e) => setValue(e.target.innerHTML)}>Sort by price: low to high</Dropdown.Item>
        <Dropdown.Item onClick={(e) => setValue(e.target.innerHTML)}>Sort by price: high to low</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProductSorting;
