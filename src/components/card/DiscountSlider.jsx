import React, { useState } from "react";
import { Offer_Url } from "../../utils/constant";

const DiscountSlider = ({ label, code, offerLogo }) => {
  return (
    <div className="flex w-[43%] flex-shrink-0 items-center gap-3 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
      <img
        src={Offer_Url + offerLogo}
        alt="this is a offer logo"
        className="w-[50px] h-[50px]"
      />
      <div>
        <p className="font-semibold text-gray-900">{label}</p>
        <p className="text-sm text-gray-500">USE {code}</p>
      </div>
    </div>
  );
};

export default DiscountSlider;
