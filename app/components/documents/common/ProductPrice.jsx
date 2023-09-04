import React from 'react'
import { handleSplitPrice } from '../../../utils/helper'


const ProductPrice = ({price}) => {
  return (
    <div className="text-black mb-1">
    <span className="text-xl font-bold">
      {handleSplitPrice(
        price
      ).beforeDecimal?.toLocaleString("tr-TR")}{" "}
    </span>
    <span className="text-xs font-light">
      {"," +
        handleSplitPrice(price).afterDecimal +
        " " +
        "TL"}
    </span>
  </div>
  )
}

export default ProductPrice