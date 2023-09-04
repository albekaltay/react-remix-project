import React from "react";

const Card = ({ rounded = "md", shadowSize = "lg", className, children }) => {
  return (
    <div
      className={`rounded-${rounded} overflow-hidden shadow-${shadowSize} bg-white ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

