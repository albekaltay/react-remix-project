import React from "react";

const HorizontalProductsContainer = ({ children }) => {
  return (
    <div className="overflow-auto w-auto bg-white mb-4">
      <div className="flex space-x-2 divide-x-2">{children}</div>
    </div>
  );
};

export default HorizontalProductsContainer;
