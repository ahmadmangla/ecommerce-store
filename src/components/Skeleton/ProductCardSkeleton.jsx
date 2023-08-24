import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import Card from "react-bootstrap/Card";

const ProductCardSkeleton = () => {
  return (
    <Card className="p-0 mb-4">
      <a>
        <Card.Img
          className={` object-fit-contain}`}
          variant="top"
          // src={`http://localhost:1338${thumbnail}`}
        />
      </a>
      <Card.Body>
        <div className="rating mb-2">
          <span>
            <Skeleton width={100} />
          </span>
        </div>
        <Card.Title className="fs-6 fw-bold">
          {<Skeleton width={60} />}
        </Card.Title>
        <Card.Text className="mb-1"> {<Skeleton count={4} />}</Card.Text>
        <div className="price fw-bold mb-2">{<Skeleton />}</div>
        <div className="price fw-bold mb-2">{<Skeleton width={100} />}</div>
      </Card.Body>
    </Card>
  );
};

export default ProductCardSkeleton;
