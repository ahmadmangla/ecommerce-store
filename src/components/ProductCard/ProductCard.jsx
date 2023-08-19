import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./ProductCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../context/cartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const ProductCard = ({ id, title, description, thumbnail, price, slug }) => {
  const dispatch = useDispatch();

  const handleClick = ({
    id,
    title,
    description,
    thumbnail,
    quantity,
    price,
    slug,
  }) => {
    dispatch(
      addToCart({
        id,
        title,
        description,
        thumbnail,
        quantity: 1,
        price,
        slug,
      })
    );
    toast.success(`${title} added to the cart`);
  };

  return (
    <Card className="p-0 mb-4">
      <Link to={`${slug}`}>
        <Card.Img
          className={` object-fit-contain ${styles.height}`}
          variant="top "
          src={thumbnail}
        />
      </Link>
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
        <Card.Title className="fs-6 fw-bold">{title}</Card.Title>
        <Card.Text className="mb-1"> {description} </Card.Text>
        <div className="price fw-bold mb-2">${price}</div>
        <Button
          variant="transparent border-black text-black"
          onClick={() =>
            handleClick({
              id,
              title,
              description,
              thumbnail,
              quantity: 1,
              price,
              slug,
            })
          }
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
