import React from "react";

const ProductSellerCount = ({
  countOfPrices,
  fontWeight = "font-semibold",
  label,
}) => {
  return (
    <p className={`text-black text-xs ${fontWeight} mb-2`}>
      {countOfPrices ? countOfPrices + " " + label : "Satıcı bulunamdı"}
    </p>
  );
};

export default ProductSellerCount;
