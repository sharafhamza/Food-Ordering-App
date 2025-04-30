import React, { useState, useEffect } from "react";
import { Single_Url, Image_Url } from "../../utils/constant"; // Assuming you have Image_Url
import { useParams } from "react-router-dom";
import useRestaurentData from "../hooks/useRestaurentData";
import { GiRoundStar } from "react-icons/gi";
import { GoTriangleDown } from "react-icons/go";

const CardSingle = () => {
  const { resId } = useParams();

  const resInfo = useRestaurentData(resId);
  console.log(resInfo);

  if (!resInfo) {
    return (
      <div className="text-center mt-10 text-xl font-semibold">Loading...</div>
    );
  }

  const {
    name,
    cuisines,
    avgRating,
    sla,
    cloudinaryImageId,
    locality,
    aggregatedDiscountInfoV3,
    costForTwoMessage,
  } = resInfo?.cards[2].card?.card?.info || {};

  return (
    <div className="single-box max-w-4xl mx-auto mt-6 p-5 rounded-2xl">
      <div class="mx-auto border-2 bg-white rounded-2xl  p-5 flex flex-col space-y-3 ">
        <h2 class="text-2xl font-bold">Chinese Wok</h2>

        <div class="flex items-center space-x-2 text-sm text-black font-gilroy font-bold">
          <div class="flex items-center space-x-1  font-semibold">
            <span className="font-bold">
              <span className="flex items-center gap-x-2 text-base">
                <div className="bg-green-600 w-5 h-5 rounded-full flex items-center justify-center">
                  <GiRoundStar className="text-white z-10 text-sm" />
                </div>
                4.3 (734 ratings)
              </span>
            </span>
          </div>
          <span class="text-gray-400">•</span>
          <span>₹400 for two</span>
        </div>

        <div class="text-sm text-orange-600 font-bold pb-2">
          <a href="#" class="hover:underline">
            Burgers, Biryani
          </a>
        </div>

        <div class="flex items-center space-x-2 text-sm text-black ">
          <div class="flex items-center gap-2 h-5">
            <div className="flex flex-col justify-center w-2">
              <div class="w-[7px] h-[7px] mx-auto rounded-full bg-gray-400 mr-2"></div>
              <div className="w-[1px] mx-auto h-6 bg-gray-400"></div>
              <div class="w-[7px] h-[7px] mx-auto rounded-full bg-gray-400 mr-2"></div>
            </div>
            <div className="flex flex-col gap-1">
              <div>
                <span className="font-semibold flex gap-2">
                  Outlet
                  <span className="flex items-center text-gray-500">
                    KOLKATA MUNICIPAL CORPORATION
                    <GoTriangleDown className="text-orange-600" />
                  </span>
                </span>
              </div>
              <span className="font-semibold">40-45 mins</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSingle;
