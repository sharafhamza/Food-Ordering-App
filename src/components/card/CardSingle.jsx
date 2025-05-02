import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurentData from "../hooks/useRestaurentData";

import CardTopDetails from "./CardTopDetails";
import DiscountList from "./DiscountList";
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
    <>
      <CardTopDetails />
      <DiscountList />
    </>
  );
};

export default CardSingle;
