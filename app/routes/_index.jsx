import VerticalProducts from "../components/documents/VerticalProducts";
import HorizontalProducts from "../components/documents/HorizontalProducts";
import useProductsModelView from "../customModelViewHooks/use-products-model-view";

export const meta = () => {
  return [{ title: "Ne Nerede En Ucuz Akakçe'de" }];
};

export default function Index() {
  const {
    products,
    horizontalProducts,
    getProductsIsLoading,
    currentProductIndex,
  } = useProductsModelView();

  return (
    <div className="h-full">
      <HorizontalProducts
        horizontalProducts={horizontalProducts}
        getProductsIsLoading={getProductsIsLoading}
      />
      <VerticalProducts
        products={products}
        getProductsIsLoading={getProductsIsLoading}
        currentProductIndex={currentProductIndex}
      />
    </div>
  );
}

