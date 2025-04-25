import React from "react";
import Navbar from "./Navbar";
import { IoIosArrowDown } from "react-icons/io";

import { LOGO } from "../../utils/constant";
const Header = () => {
  return (
    <div className="shadow-lg shadow-[#ddd]/40">
      <div className="w-[70%] mx-auto font-custom flex items-center justify-between ">
        <div className="flex gap-8 py-4 ">
          <div className="w-20">
            <img src={LOGO} alt="Logo" />
          </div>
          <div className="flex items-center justify-between w-[70px] cursor-pointer">
            <span className="inline-block border-b-2 font-bold text-sm text-menu border-black ">
              Other
            </span>
            <IoIosArrowDown className="text-orange-500 text-[18px]" />
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
