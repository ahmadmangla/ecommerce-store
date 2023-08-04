import { useParams } from "react-router-dom";
import { products } from "../../utils/dummydata";

const ProductDetail = () => {
  const { slug } = useParams();
  const SingleProduct = products.find((prod) => prod.slug === slug);
  return <div>{SingleProduct.title}</div>;
};

export default ProductDetail;
