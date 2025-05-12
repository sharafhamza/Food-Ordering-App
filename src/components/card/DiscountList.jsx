import DiscountSlider from "./DiscountSlider";
import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
const DiscountList = ({ offersInfo }) => {
  const [value, setValue] = useState(0);
  console.log(offersInfo);

  const handleNext = () => {
    if (a) return;
    setValue((prev) => prev + 20);
  };
  const handlePrev = () => {
    if (value <= 0) {
      return setValue(0);
    }
    setValue((prev) => prev - 20);
  };

  return (
    <div className="max-w-4xl mx-auto mt-4">
      <div className="flex gap-4  justify-end cursor-pointer">
        <div
          className={`w-8 h-8 ${
            value <= 0 ? "bg-gray-100 text-gray-400" : "bg-gray-200 "
          }  rounded-full flex items-center justify-center`}
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </div>
        <div
          className={`w-8 h-8 ${
            value >= 80 ? "bg-gray-100 text-gray-400" : "bg-gray-200 "
          }  rounded-full flex items-center justify-center`}
          onClick={handleNext}
        >
          <FaArrowRight />
        </div>
      </div>
      <div className="overflow-hidden gap-3 mt-3">
        <div
          className="flex duration-300 gap-4"
          style={{ translate: `-${value}%` }}
        >
          {offersInfo.map((offer, index) => (
            <DiscountSlider
              key={index}
              label={offer?.info?.header}
              code={offer?.info?.couponCode}
              offerLogo={offer?.info?.offerLogo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscountList;
