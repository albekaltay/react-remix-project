import React from "react";
import Loading from "./Loading";
import HorizontalProductsContainer from "../layout/HorizontalProductsContainer";

const HorizontalProductsLoading = () => {
  let horizontalProducts = [{}, {}, {}, {}];
  return (
    <HorizontalProductsContainer>
      {horizontalProducts.map((product, index) => (
        <div key={index} className="p-5 min-w-[450px] min-h-[168px]">
          <Loading />
        </div>
      ))}
    </HorizontalProductsContainer>
  );
};

export default HorizontalProductsLoading;

