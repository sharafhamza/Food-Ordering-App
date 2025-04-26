import React, { useState, useEffect } from "react";
import { Single_Url, Image_Url } from "../../utils/constant"; // Assuming you have Image_Url
import { useParams } from "react-router-dom";

const CardSingle = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const fetchData = async () => {
    const data = await fetch(Single_Url + resId);
    const json = await data.json();
    setResInfo(json?.data?.cards[2]?.card?.card);
  };

  useEffect(() => {
    fetchData();
  }, [resId]);

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
  } = resInfo?.info || {};

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      {/* Image */}
      <img
        src={`${Image_Url}${cloudinaryImageId}`}
        alt={name}
        className="w-full h-72 object-cover rounded-lg"
      />

      {/* Name & Info */}
      <div className="mt-6">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-gray-600 mt-2">{cuisines?.join(", ")}</p>
        <p className="text-gray-500">{locality}</p>

        {/* Rating & Time & Cost */}
        <div className="flex flex-wrap gap-4 mt-4 text-gray-700">
          <div className="flex items-center gap-1">
            <span className="text-green-600 font-bold">★ {avgRating}</span>
          </div>
          <div>• {sla?.slaString}</div>
          <div>• {costForTwoMessage}</div>
        </div>

        {/* Offer */}
        {aggregatedDiscountInfoV3?.header && (
          <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md font-semibold text-center">
            {aggregatedDiscountInfoV3.header}{" "}
            {aggregatedDiscountInfoV3.subHeader}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardSingle;
