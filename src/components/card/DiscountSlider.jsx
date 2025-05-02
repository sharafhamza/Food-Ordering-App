import React, { useState } from "react";

const DiscountSlider = ({ label, code }) => {
  return (
    <div className="flex w-[43%] flex-shrink-0 items-center gap-3 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
      <div className="bg-orange-500 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center">
        %
      </div>
      <div>
        <p className="font-semibold text-gray-900">{label}</p>
        <p className="text-sm text-gray-500">USE {code}</p>
      </div>
    </div>
  );
};

export default DiscountSlider;
