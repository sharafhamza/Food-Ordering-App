import React from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <AccordionItem name={item.name} price={item.price} key={item.id} />
      ))}
    </>
  );
};

export default Accordion;
