export const handleSplitPrice = (price) => {
    if (price?.toString().includes(".")) {
      const priceParts = price.toString().split(".");
      const beforeDecimal = priceParts[0];
      const afterDecimal = priceParts[1];

      return {
        beforeDecimal: parseInt(beforeDecimal),
        afterDecimal: afterDecimal,
      };
    } else {
      return { beforeDecimal: price, afterDecimal: "00" };
    }
  };

  export const handleFollowPlusCount = (count) => {
    if (count > 3000) {
      return "3.000+";
    } else if (count > 2000) {
      return "2.000+";
    } else if (count > 1000) {
      return "1.000+";
    } else if (count > 500) {
      return "500+";
    } else {
      return count;
    }
  };
