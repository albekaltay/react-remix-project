import React from "react";

const StarIconFull = () => {
  return <i className="fa-solid fa-star w-4 h-4 text-yellow-500 mr-0.5" />;
};

const StarIconFree = () => {
  return <i className="fa-regular fa-star w-4 h-4 text-gray-500 mr-0.5" />;
};

const Rating = ({ rating }) => {
  const filledStars = Math.round(rating);
  const maxStars = 5;

  return (
    <div className="flex items-center justify-center sm:justify-normal">
      {[...Array(filledStars)].map((_, index) => (
        <StarIconFull key={index} />
      ))}
      {[...Array(maxStars - filledStars)].map((_, index) => (
        <StarIconFree key={index} />
      ))}
    </div>
  );
};

export default Rating;
