import React from "react";
import { Image_Url } from "../../utils/constant";

const Card = ({ data }) => {
  const {
    name,
    cuisines,
    avgRating,
    sla,
    cloudinaryImageId,
    locality,
    aggregatedDiscountInfoV3,
  } = data || {};

  return (
    <div className="rounded-xl cursor-pointer shadow-lg w-full overflow-hidden bg-white hover:scale-105 transition-transform duration-200">
      <div className="relative">
        <img
          src={`${Image_Url}${cloudinaryImageId}`}
          alt={name}
          className="w-full h-60 object-cover"
        />
        {aggregatedDiscountInfoV3?.header && (
          <div className="absolute bottom-0 bg-black bg-opacity-60 text-white text-sm px-2 py-1 font-semibold w-full text-center">
            {aggregatedDiscountInfoV3?.header}
            {aggregatedDiscountInfoV3?.subHeader || ""}
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="font-bold text-lg truncate">{name}</h3>
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <span className="text-green-600 font-bold mr-1">★ {avgRating}</span>
          <span>• {sla?.slaString}</span>
        </div>
        <p className="text-sm text-gray-500 mt-1 truncate">
          {cuisines?.join(", ")}
        </p>
        <p className="text-sm text-gray-400">{locality}</p>
      </div>
    </div>
  );
};

export default Card;
