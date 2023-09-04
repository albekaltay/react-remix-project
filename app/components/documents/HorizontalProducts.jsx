import React from "react";
import HorizontalProductsLoading from "../loadings/HorizontalProductsLoading";
import HorizontalProductsContainer from "../layout/HorizontalProductsContainer";
import ProductCard from "./productCard/ProductCard";

const HorizontalProducts = ({ horizontalProducts, getProductsIsLoading }) => {
  return (
    <>
      {getProductsIsLoading ? (
        <HorizontalProductsLoading />
      ) : (
        <HorizontalProductsContainer>
          {horizontalProducts.map((product) => (
            <ProductCard
              key={product.code}
              product={product}
              isHorizontal={true}
            />
          ))}
        </HorizontalProductsContainer>
      )}
    </>
  );
};

export default HorizontalProducts;
