import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./ProductCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductCard = (props) => {
  return (
    <Card className="p-0 mb-4">
      <Card.Img
        className={` object-fit-contain ${styles.height}`}
        variant="top "
        src={props.thumbnail}
      />
      <Card.Body>
        <div className="rating mb-2">
          <span>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </span>
        </div>
        <Card.Title className="fs-6 fw-bold">{props.title}</Card.Title>
        <Card.Text className="mb-1"> {props.description} </Card.Text>
        <div className="price fw-bold mb-2">${props.price}</div>
        <Button variant="transparent border-black text-black">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
