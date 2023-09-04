import React from "react";

const Badge = ({ children }) => {
  return (
    <div className="inline-flex">
      <span className="rounded-sm bg-yellow-50 px-2 py-1 text-xs font-semibold text-black ring-1 ring-inset ring-yellow-300/20 mb-4">
        {children}
      </span>
    </div>
  );
};

export default Badge;
