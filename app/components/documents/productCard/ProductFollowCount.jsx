import React from "react";
import { handleFollowPlusCount } from "../../../utils/helper";

const ProductFollowCount = ({ followCount }) => {
  return (
    <p className="text-black text-xs font-light">
      {followCount
        ? handleFollowPlusCount(followCount) + " " + "Takipçi"
        : "Takipçi sayısı bulunamadı"}
    </p>
  );
};

export default ProductFollowCount;
