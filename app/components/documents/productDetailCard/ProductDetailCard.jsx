import React from "react";
import Card from "../../ui/Card";
import Loading from "../../loadings/Loading";
import useProductDetailModelView from "../../../customModelViewHooks/use-product-detail-model-view";
import ProductPrice from "../common/ProductPrice";
import Cargo from "./Cargo";
import LastUpdate from "./LastUpdate";
import CapacityOptions from "./CapacityOptions";
import ProductName from "../common/ProductName";
import ProductSellerCount from "../common/ProductSellerCount";
import ProductImage from "../common/ProductImage";
import Badge from "../../ui/Badge";
import ProductBrandName from "./ProductBrandName";
import Rating from "../../custom/Raiting";

const ProductDetailCard = () => {
  const { singleProduct, getSingleProductIsLoading } =
    useProductDetailModelView();
  return (
    <Card
      className={`flex  items-center justify-center p-5 ${
        getSingleProductIsLoading && "min-h-[478px]"
      } `}
    >
      {getSingleProductIsLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col w-full ">
          <div className="flex flex-row justify-between">
            <ProductBrandName mkName={singleProduct.mkName} />
            <Rating rating={singleProduct.rating} />
          </div>

          <ProductName
            productName={singleProduct.productName}
            textColor={"text-black"}
          />
          <Badge> {singleProduct.badge}</Badge>
          <ProductImage
            imageUrl={singleProduct.imageUrl}
            isHorizontal={false}
            isProductDiscount={false}
          />
          <CapacityOptions storageOptions={singleProduct.storageOptions} />
          <div className="text-center">
            <ProductSellerCount
              countOfPrices={singleProduct.countOfPrices}
              fontWeight="font-semibold"
              label={"satıcı içinde kargo dahil en ucuz fiyat seçeneği"}
            />
            <ProductPrice price={singleProduct.price} />
            <Cargo />
            <LastUpdate lastUpdate={singleProduct.lastUpdate} />
          </div>
        </div>
      )}
    </Card>
  );
};

export default ProductDetailCard;
