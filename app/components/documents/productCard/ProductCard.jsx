import React from "react";
import Card from "../../ui/Card";
import { Link } from "@remix-run/react";
import ProductImage from "../common/ProductImage";
import ProductCardContents from "./ProductCardContents";

const ProductCard = ({ product, isHorizontal }) => {
  return (
    <Card
      className={`p-5 ${isHorizontal && "min-w-[450px]"}`}
      rounded={isHorizontal ? "none" : "md"}
    >
      <Link to={`/product/${product.code}`}>
        <div
          className={`flex ${isHorizontal ? "flex-row gap-4" : "flex-col"} `}
        >
          <ProductImage
            imageUrl={product.imageUrl}
            isHorizontal={isHorizontal}
            isProductDiscount={true}
          />
          <ProductCardContents product={product} />
        </div>
      </Link>
    </Card>
  );
};

export default ProductCard;

