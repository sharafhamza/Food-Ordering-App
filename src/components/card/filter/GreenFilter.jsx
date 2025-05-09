import React, { useState } from "react";

const GreenFilter = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative border border-gray-300 w-[80px] h-[34px] flex items-center justify-center rounded-full">
      <div
        className={`w-10 rounded h-[10px] ${
          open ? "bg-green-600" : " bg-gray-300"
        } cursor-pointer`}
        onClick={() => setOpen(!open)}
      ></div>
      <div
        className={`w-[22px] h-[22px] rounded-md border-2 absolute  translate-y-[5px] top-0 left-0 border-green-700 flex items-center justify-center bg-white cursor-pointer transition-all ${
          open ? "translate-x-[40px]" : "translate-x-[14px]"
        }`}
        onClick={() => setOpen(!open)}
      >
        <div className="w-[10px] h-[10px] bg-green-700 rounded-full"></div>
      </div>
    </div>
  );
};

export default GreenFilter;
