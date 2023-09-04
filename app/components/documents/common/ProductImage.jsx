import React from "react";

const ProductImage = ({ imageUrl, isHorizontal, isProductDiscount }) => {
  return (
    <>
      {isProductDiscount ? (
        <ProductDiscountContainer isHorizontal={isHorizontal}>
          <Image imageUrl={imageUrl} isHorizontal={isHorizontal} />
        </ProductDiscountContainer>
      ) : (
        <Image imageUrl={imageUrl} isHorizontal={isHorizontal} />
      )}
    </>
  );
};

export default ProductImage;

const ProductDiscountContainer = ({ children, isHorizontal }) => {
  return (
    <div className={`relative ${isHorizontal && "pe-14"} `}>
      {children}
      <span
        className={`absolute top-0 ${
          isHorizontal ? " right-0" : "left-0"
        } rounded-full bg-red-500 text-white font-bold px-1 py-2.5`}
      >
        10%
      </span>
    </div>
  );
};

const Image = ({ isHorizontal, imageUrl }) => {
  return (
    <img
      className={`object-scale-down h-32  ${
        isHorizontal ? "w-32" : "w-full mb-2"
      }`}
      src={imageUrl}
    />
  );
};
