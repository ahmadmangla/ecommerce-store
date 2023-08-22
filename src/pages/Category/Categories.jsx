import { useParams } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";
import { useGetProductByCategoryQuery } from "../../context/Products/productSlice";

const Categories = () => {
  const { category } = useParams();

  if (category) {
    const { data, error, isLoading } = useGetProductByCategoryQuery(category);

    return (
      <>
        {
          <ProductList
            filteredData={data}
            title={data?.data[0]?.attributes?.categoryName}
          />
        }
      </>
    );
  }
};

export default Categories;
