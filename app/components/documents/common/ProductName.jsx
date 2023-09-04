import React from "react";

const ProductName = ({ productName, textColor }) => {
  return (
    <span className={`text-sm font-light mb-3 ${textColor}`}>
      {productName}
    </span>
  );
};

export default ProductName;
