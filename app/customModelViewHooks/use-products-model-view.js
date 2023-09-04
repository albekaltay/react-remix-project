import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAsync } from "../redux/slices/productsSlice";

const useProductsModelView = () => {

    const { products, horizontalProducts, getProductsIsLoading, currentPage } =
    useSelector((state) => state.products);

  const dispatch = useDispatch();

  const handleGetProducts = () => {
    dispatch(getProductsAsync());
  };

  useEffect(() => {
    if (products.length === 0 && currentPage === 1) {
      handleGetProducts();
    }
  }, []);

  const currentProductIndex = currentPage - 1;


  return {
    products,
    horizontalProducts,
    getProductsIsLoading,
    currentProductIndex
  };
};
export default useProductsModelView;
