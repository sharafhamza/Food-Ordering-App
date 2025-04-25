import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const OnMindSlider = ({ resInfo }) => {
  const [value, setValue] = useState(0);

  const handleNext = () => {
    if (value == "196") {
      setValue((prev) => prev + 34);
    } else {
      value >= 230 ? "" : setValue((prev) => prev + 49);
    }
  };
  const handlePrev = () => {
    value <= 0 ? "" : setValue((prev) => prev - 49);
  };

  return (
    <div className=" w-[970px]  mx-auto mt-12">
      <div className="flex gap-4 justify-end cursor-pointer">
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
            value >= 230 ? "bg-gray-100 text-gray-400" : "bg-gray-200 "
          }  rounded-full flex items-center justify-center`}
          onClick={handleNext}
        >
          <FaArrowRight />
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex duration-300 select-none"
          style={{ translate: `-${value}%` }}
        >
          {resInfo.map((item) => (
            <img
              key={item.imageId}
              className="w-[200px] h-[200px]"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
                item.imageId
              }
              alt="img"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnMindSlider;
