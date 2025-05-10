import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const TopPicks = () => {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(2);

  const imageArray = [
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/KPan1",
    },
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/RSPan2",
    },
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/SFPa3",
    },
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/167086363D.png",
    },
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/EvMp",
    },
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/170329290E.png",
    },
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/EvMp",
    },
  ];

  const handleNext = () => {
    if (imageArray.length <= count) {
      return;
    }
    setCount((prev) => prev + 1);
    setValue((prev) => prev + 450);
  };

  const handlePrev = () => {
    if (value > 0) {
      setValue((prev) => prev - 450);
      setCount((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="flex gap-4 justify-end cursor-pointer">
        <div
          className={`w-8 h-8 ${
            value <= 0 ? "bg-gray-100 text-gray-400" : "bg-gray-200"
          } rounded-full flex items-center justify-center`}
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </div>
        <div
          className={`w-8 h-8 ${
            imageArray.length <= count
              ? "bg-gray-100 text-gray-400"
              : "bg-gray-200"
          } rounded-full flex items-center justify-center cursor-pointer`}
          onClick={handleNext}
          disabled={value >= (imageArray.length - 1) * 48}
        >
          <FaArrowRight />
        </div>
      </div>
      <div className="overflow-hidden mt-4">
        <div
          className={`flex gap-3 transition-all duration-300`}
          style={{ transform: `translateX(-${value}px)` }}
        >
          {imageArray.map((item, index) => (
            <div key={index} className="w-[440px]  flex-shrink-0 h-[440px]">
              <img
                src={item.image}
                alt={item.image}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopPicks;
