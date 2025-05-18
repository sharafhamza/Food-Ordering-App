import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import AccordionItem from "./AccordionItem";

const Accordion = ({ accordionData }) => {
  return (
    <div>
      {accordionData.map(
        (item) =>
          item.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategor" && (
            <h2>{item?.card?.card?.title}</h2>
          )
      )}
    </div>
  );
};

export default Accordion;
