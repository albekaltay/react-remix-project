import React from "react";
import ProductName from "../common/ProductName";
import ProductPrice from "../common/ProductPrice";
import ProductSellerCount from "../common/ProductSellerCount";
import ProductFollowCount from "./ProductFollowCount";

const ProductCardContents = ({ product }) => {
  return (
    <div>
      <ProductName productName={product.name} textColor={"text-blue-500"} />
      <ProductPrice price={product.price} />
      <ProductSellerCount
        countOfPrices={product.countOfPrices}
        fontWeight="font-light"
        label={"Satıcı"}
      />
      <ProductFollowCount followCount={product.followCount} />
    </div>
  );
};

export default ProductCardContents;
