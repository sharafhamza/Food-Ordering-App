import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ accordionData }) => {
  const [showIndex, setShowIndex] = useState(0);
  const handleToggle = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mt-8">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={item?.card?.card?.categoryId || index}
          title={item?.card?.card?.title}
          items={item?.card?.card?.itemCards}
          showItems={index === showIndex && true}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
