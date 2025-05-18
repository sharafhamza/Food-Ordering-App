import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurentData from "../hooks/useRestaurentData";
import CardTopDetails from "./CardTopDetails";
import DiscountList from "./DiscountList";
import Filter from "./filter/Filter";
import TopPicks from "./TopPicks/TopPicks";
import Accordion from "./Accordion/Accordion";

const CardSingle = () => {
  const { resId } = useParams();

  const resInfo = useRestaurentData(resId);
  const [newAccordionData, setnewAccordionData] = useState(false);

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
    aggregatedDiscountInfoV3,
    totalRatingsString,
    costForTwoMessage,
    areaName,
  } = resInfo?.cards[2]?.card?.card?.info || {};
  const offersInfo =
    resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers || {};
  const allAccordionData =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  // ✅ Filter only the ItemCategory types
  const accordionData = allAccordionData.filter(
    (item) =>
      item?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  return (
    <div className="max-w-4xl mx-auto">
      <CardTopDetails
        name={name}
        cuisines={cuisines}
        avgRating={avgRating}
        sla={sla}
        costForTwoMessage={costForTwoMessage}
        areaName={areaName}
        totalRatingsString={totalRatingsString}
      />
      <DiscountList offersInfo={offersInfo} />
      <Filter />
      <TopPicks />
      <Accordion accordionData={accordionData} />
    </div>
  );
};

export default CardSingle;
