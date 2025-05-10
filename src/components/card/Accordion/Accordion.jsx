import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      class="border-t-[14px] border-gray-200 mt-4 py-2 px-5 cursor-pointer"
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-black text-lg">Recommended (13)</h2>
        <button>
          <svg
            className="w-4 h-4 text-gray-500"
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
        </button>
      </div>
      {open ? <AccordionItem /> : ""}
    </div>
  );
};

export default Accordion;
