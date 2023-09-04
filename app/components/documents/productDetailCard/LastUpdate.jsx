import React from "react";

const LastUpdate = ({ lastUpdate }) => {
  return (
    <p className="text-xs font-normal text-gray-400">
      {"Son güncelleme:" + " " + lastUpdate}
    </p>
  );
};

export default LastUpdate;
