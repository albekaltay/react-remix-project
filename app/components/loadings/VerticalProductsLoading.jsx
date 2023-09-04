import React from "react";
import Loading from "./Loading";
import Card from "../ui/Card";
import VerticalProductsContainer from "../layout/VerticalProductsContainer";

const VerticalProductsLoading = () => {
  const products = [{}, {}, {}, {}, {}, {}];
  return (
    <VerticalProductsContainer>
      {products.map((product, index) => (
        <Card key={index} className={"p-5 min-h-[276px]"}>
          <div className="flex flex-col items-center h-full">
            <Loading />
          </div>
        </Card>
      ))}
    </VerticalProductsContainer>
  );
};

export default VerticalProductsLoading;

