import React from "react";

const Button = ({ children, className, disabled, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`relative inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
