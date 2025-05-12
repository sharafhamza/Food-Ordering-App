import React, { useState, useEffect } from "react";
import { GiRoundStar } from "react-icons/gi";
import { GoTriangleDown } from "react-icons/go";
const CardTopDetails = ({
  name,
  cuisines,
  avgRating,
  sla,
  costForTwoMessage,
  areaName,
  totalRatingsString,
}) => {
  return (
    <>
      <div className="single-box max-w-4xl mx-auto mt-6 p-5 rounded-3xl">
        <div className="mx-auto border-2 bg-white rounded-3xl  p-5 flex flex-col space-y-3 ">
          <h2 className="text-2xl font-bold">{name}</h2>

          <div className="flex items-center space-x-2 text-sm text-black font-gilroy font-bold">
            <div className="flex items-center space-x-1  font-semibold">
              <span className="font-bold">
                <span className="flex items-center gap-x-2 text-base">
                  <div className="bg-green-600 w-5 h-5 rounded-full flex items-center justify-center">
                    <GiRoundStar className="text-white z-10 text-sm" />
                  </div>
                  {avgRating} ({totalRatingsString})
                </span>
              </span>
            </div>
            <span className="text-gray-400">•</span>
            <span className="text-base">{costForTwoMessage}</span>
          </div>

          <div className="text-sm text-orange-600 font-bold pb-2">
            {cuisines.map((item, index) => (
              <span key={index}>
                <a href="#" className="underline">
                  {item}
                </a>
                {index < cuisines.length - 1 && ", "}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-2 text-sm pb-2 text-black ">
            <div className="flex items-center gap-2 h-5">
              <div className="flex flex-col justify-center w-2">
                <div className="w-[7px] h-[7px] mx-auto rounded-full bg-gray-400 mr-2"></div>
                <div className="w-[1px] mx-auto h-6 bg-gray-400"></div>
                <div className="w-[7px] h-[7px] mx-auto rounded-full bg-gray-400 mr-2"></div>
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <span className="flex gap-2 font-bold">
                    Outlet
                    <span className="flex items-center text-gray-500 font-semibold">
                      {areaName}
                      <GoTriangleDown className="text-orange-600" />
                    </span>
                  </span>
                </div>
                <span className="font-bold">
                  {sla.minDeliveryTime}-{sla.maxDeliveryTime} mins
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTopDetails;
