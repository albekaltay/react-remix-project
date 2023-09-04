import { useDispatch, useSelector } from "react-redux";
import {
  getNextPageProductsAsync,
  updateCurrentPage,
} from "../redux/slices/productsSlice";

const usePaginationModelView = () => {
  const { products, nextUrl, currentPage } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();
  const handleGetNextPageProducts = () => {
    if (products.length === currentPage) {
      dispatch(getNextPageProductsAsync(nextUrl));
    }
    dispatch(updateCurrentPage({ type: "INCREASE" }));
  };

  const handleGetPreviousPageProducts = () => {
    dispatch(updateCurrentPage({ type: "DECREASE" }));
  };

  const nextButtonIsDisabled =
    products.length === currentPage && currentPage !== 1;

  const previousButtonIsDisabled = currentPage === 1;

  return {
    handleGetNextPageProducts,
    handleGetPreviousPageProducts,
    nextButtonIsDisabled,
    previousButtonIsDisabled,
    currentPage,
  };
};
export default usePaginationModelView;
