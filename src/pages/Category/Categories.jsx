import { useParams } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";
import { products } from "../../utils/dummydata";

const Categories = () => {
  const { category } = useParams();

  const FilteredProducts = products.filter(
    (prod) => prod.category === category
  );

  return (
    <ProductList
      title={FilteredProducts[0].categoryName}
      categories={FilteredProducts}
    />
  );
};

export default Categories;
