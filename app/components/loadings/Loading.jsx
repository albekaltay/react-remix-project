import React from "react";


const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-6 h-6 border-4 border-blue-500 rounded-full animate-spin mr-2"
      ></div>
      <p className="text-xs font-semibold text-gray-400">Loading... </p>
    </div>
  );
};

export default Loading;

