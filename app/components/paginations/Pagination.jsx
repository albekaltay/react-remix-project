import React from "react";
import usePaginationModelView from "../../customModelViewHooks/use-pagination-model-view";
import Button from "../ui/Button";

const Pagination = () => {
  const {
    handleGetNextPageProducts,
    handleGetPreviousPageProducts,
    nextButtonIsDisabled,
    previousButtonIsDisabled,
    currentPage,
  } = usePaginationModelView();

  return (
    <div className="flex flex-1 justify-center items-center gap-3 py-2">
      <Button
        onClick={handleGetPreviousPageProducts}
        disabled={previousButtonIsDisabled}
        className={previousButtonIsDisabled && "cursor-not-allowed"}
      >
        Önceki
      </Button>
      <p>{"Sayfa / " + currentPage} </p>
      <Button
        onClick={handleGetNextPageProducts}
        disabled={nextButtonIsDisabled}
        className={nextButtonIsDisabled && "cursor-not-allowed"}
      >
        Sonraki
      </Button>
    </div>
  );
};

export default Pagination;
