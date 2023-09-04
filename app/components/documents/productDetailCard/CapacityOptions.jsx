import React from "react";

const CapacityOptions = ({ storageOptions }) => {
  return (
    <div className="bg-gray-100/60 border-t-2 py-4 px-8 sm:px-16 md:px-32">
      <p className="text-center mb-2"> Kapasite seçenekleri: </p>
      <div className="flex flex-col sm:flex-row gap-2">
        {storageOptions?.map((storageOption) => (
          <div
            key={storageOption}
            className="sm:w-1/3 border-2 border-gray-400 rounded-md py-2 px-6 text-center"
          >
            <span>{storageOption}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CapacityOptions;
