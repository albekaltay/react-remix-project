import React from "react";
import VerticalProductsContainer from "../layout/VerticalProductsContainer";
import VerticalProductsLoading from "../loadings/VerticalProductsLoading";
import ProductCard from "./productCard/ProductCard";
import Pagination from "../paginations/Pagination";

const VerticalProducts = ({
  products,
  getProductsIsLoading,
  currentProductIndex,
}) => {
  return (
    <>
      {getProductsIsLoading ? (
        <VerticalProductsLoading />
      ) : (
        <>
          <VerticalProductsContainer>
            {products[currentProductIndex]?.map((product) => (
              <ProductCard
                key={product.code}
                product={product}
                isHorizontal={false}
              />
            ))}
          </VerticalProductsContainer>
          <Pagination />
        </>
      )}
    </>
  );
};

export default VerticalProducts;
