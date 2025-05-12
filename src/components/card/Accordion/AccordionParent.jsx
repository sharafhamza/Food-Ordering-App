import React, { useState } from "react";
import Accordion from "./Accordion";

const AccordionParent = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which accordion is open

  const accordionData = [
    {
      title: "Veg Pizza",
      count: 4,
      items: [
        {
          id: 1,
          name: "Kadhai Paneer",
          price: 319,
          description:
            "Juicy marinated paneer with capsicum and onion in flavorful Kadhai sauce.",
          rating: 4.2,
          customisable: true,
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/KPan1",
        },
        {
          id: 2,
          name: "Royal Spice Paneer",
          price: 319,
          description:
            "Paneer with tomato, onion, and spices for a rich experience.",
          rating: 4.0,
          customisable: true,
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/RSPan2",
        },
        {
          id: 3,
          name: "Southern Fiery Paneer",
          price: 319,
          description:
            "Paneer with green capsicum, tomato, and fiery southern spices.",
          rating: 3.9,
          customisable: true,
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/SFPa3",
        },
        {
          id: 4,
          name: "Classic Margherita",
          price: 169,
          description: "Herb-infused pan sauce with 100% mozzarella cheese.",
          rating: 3.5,
          customisable: true,
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/167086363D.png",
        },
      ],
    },
    {
      title: "Buy 1 Pizza Get 2 Sides, 1 Pepsi Free",
      count: 2,
      items: [
        {
          id: 5,
          name: "Everest Veggie Max Combo",
          price: 499,
          description:
            "Loaded veggie pizza with 2 sides and 1 Pepsi free. Perfect for sharing!",
          rating: 4.3,
          customisable: true,
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/EvMp",
        },
        {
          id: 6,
          name: "Tandoori Delight Combo",
          price: 519,
          description: "Smoky paneer pizza with classic sides and free Pepsi.",
          rating: 4.1,
          customisable: true,
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/170329290E.png",
        },
      ],
    },
  ];

  return (
    <div>
      {accordionData.map((section, index) => (
        <div key={index}>
          <div
            className="flex items-center justify-between cursor-pointer py-2"
            onClick={() =>
              setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
            }
          >
            <h2 className="font-bold text-black text-lg">{section.title}</h2>
            <svg
              className={`w-4 h-4 text-gray-500 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Render accordions only if this section is open */}
          {openIndex === index &&
            section.items.map((pizza) => (
              <Accordion
                key={pizza.id}
                name={pizza.name}
                price={pizza.price}
                description={pizza.description}
                image={pizza.image}
                open={true}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default AccordionParent;
