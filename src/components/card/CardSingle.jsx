import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Image_Url } from "../../utils/constant";
import useRestaurentData from "../hooks/useRestaurentData";

const CardSingle = async () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  const resInfo = useRestaurentData(resId);
  setRestaurant(resInfo);

  if (!restaurant) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  const {
    name,
    cuisines,
    avgRating,
    sla,
    cloudinaryImageId,
    locality,
    aggregatedDiscountInfoV3,
    description,
  } = restaurant || {};

  return (
    <div className="max-w-4xl mx-auto p-5">
      <img
        src={`${Image_Url}${cloudinaryImageId}`}
        alt={name}
        className="w-full h-80 object-cover rounded-xl"
      />
      <h1 className="text-3xl font-bold mt-4">{name}</h1>
      <div className="flex items-center text-lg text-gray-600 mt-2">
        <span className="text-green-600 font-bold mr-2">★ {avgRating}</span>
        <span>• {sla?.slaString}</span>
      </div>
      <p className="text-md text-gray-500 mt-2">{cuisines?.join(", ")}</p>
      <p className="text-md text-gray-400">{locality}</p>
      {aggregatedDiscountInfoV3?.header && (
        <p className="mt-4 text-green-700 font-semibold">
          {aggregatedDiscountInfoV3?.header}{" "}
          {aggregatedDiscountInfoV3?.subHeader}
        </p>
      )}
      {description && <p className="mt-4 text-gray-700">{description}</p>}
    </div>
  );
};

export default CardSingle;
