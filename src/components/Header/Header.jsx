import React from "react";
import Navbar from "./Navbar";
import { LOGO } from "../../utils/constant";
const Header = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="w-20">
        <img src={LOGO} alt="Logo" />
      </div>
      <div>
        <span className="inline-block border-b-2 border-black">Other</span>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
