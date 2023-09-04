import React from "react";

const VerticalProductsContainer = ({ children }) => {
  return (
    <div className={`grid gap-4 grid-cols-1 sm:grid-cols-2 px-10 sm:px-0 mb-2`}>
      {children}
    </div>
  );
};

export default VerticalProductsContainer;
