import { useParams } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";
import { useGetProductByCategoryQuery } from "../../context/Products/productSlice";

const Categories = () => {
  const { category } = useParams();

  if (category) {
    let { data, error, isLoading } = useGetProductByCategoryQuery(category);

    return <ProductList filteredData={!isLoading ? data : null} title={!isLoading ? data.products.category : null} />;
  }
};

export default Categories;
