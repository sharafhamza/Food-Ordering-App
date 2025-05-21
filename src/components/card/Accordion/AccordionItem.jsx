import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import FoodItem from "./FoodItem";

const AccordionItem = ({ title, items, showItems, onToggle }) => {
  return (
    <>
      <div
        className="py-2 border-t-[14px] border-gray-200 cursor-pointer"
        onClick={onToggle}
      >
        <h2 className="font-bold text-lg px-3 flex items-center justify-between">
          {title} ({items.length})
          {showItems ? <FaChevronDown /> : <FaChevronUp />}
        </h2>
      </div>
      <div>
        {items.map((item, index) => {
          const info = item?.card?.info;
          const { name, price, description, imageId, ratings } = info || {};

          if (!showItems) return;
          return (
            <>
              <FoodItem
                info={info}
                name={name}
                price={price}
                description={description}
                imageId={imageId}
                rating={ratings}
                key={index}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default AccordionItem;
