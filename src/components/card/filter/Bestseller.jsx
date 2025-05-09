import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Bestseller = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className={`border rounded-full h-[34px] font-semibold cursor-pointer text-base ${
        open ? "bg-gray-200 border-gray-500" : "border-gray-300 bg-white"
      }  p-4 flex items-center justify-center gap-2`}
    >
      Bestseller {open && <RxCross2 />}
    </div>
  );
};

export default Bestseller;
