import React, { useState } from "react";
import Accordion from "./Accordion";

const AccordionParent = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const accordionData = [
    {
      title: "Veg Pizza",
      items: [
        {
          id: 1,
          name: "Kadhai Paneer",
          price: 319,
          description: "Juicy marinated paneer with capsicum and onion.",
          image: "https://example.com/image1.jpg",
        },
        {
          id: 2,
          name: "Margherita",
          price: 169,
          description: "Classic mozzarella cheese pizza.",
          image: "https://example.com/image2.jpg",
        },
      ],
    },
    {
      title: "Combos",
      items: [
        {
          id: 3,
          name: "Paneer Combo",
          price: 499,
          description: "Paneer pizza with sides and a drink.",
          image: "https://example.com/image3.jpg",
        },
      ],
    },
  ];

  return <div></div>;
};

export default AccordionParent;
