import React from "react";
import Navbar from "./Navbar";
import { LOGO } from "../../utils/constant";
const Header = () => {
  return (
    <div>
      <img src={LOGO} alt="Logo" />
      <Navbar />
    </div>
  );
};

export default Header;
