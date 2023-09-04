import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductAsync } from "../redux/slices/productsSlice";
import { useParams } from "@remix-run/react";

const useProductDetailModelView = () => {
  const params = useParams();
  const { productId } = params;

  const { singleProduct, getSingleProductIsLoading } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProductAsync(productId));
  }, []);

  return {
    singleProduct,
    getSingleProductIsLoading,
  };
};
export default useProductDetailModelView;
