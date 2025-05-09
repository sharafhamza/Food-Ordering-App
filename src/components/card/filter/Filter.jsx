import React from "react";
import GreenFilter from "./GreenFilter";
import RedFilter from "./RedFilter";
import Bestseller from "./Bestseller";

const Filter = () => {
  return (
    <div className="flex gap-2 mt-4">
      <GreenFilter />
      <RedFilter />
      <Bestseller />
    </div>
  );
};

export default Filter;
