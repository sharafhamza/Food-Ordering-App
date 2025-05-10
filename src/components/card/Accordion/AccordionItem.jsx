import React from "react";

const AccordionItem = () => {
  return (
    <div>
      <div className="rounded-lg shadow-sm flex items-start justify-between bg-white mt-4">
        <div className="flex-1">
          <div
            className={`w-[20px] h-[20px] rounded-md border-2  translate-y-[5px] border-green-700 flex items-center justify-center bg-white cursor-pointer mb-4 `}
          >
            <div className="w-[9px] h-[9px] bg-green-700 rounded-full"></div>
          </div>
          <h2 className="text-lg font-semibold text-gray-800">Margherita</h2>
          <p className="text-base text-black  font-semibold mt-1">₹169</p>
          <div className="flex items-center text-green-600 text-sm mt-1">
            <span className="font-bold">★ 3.5</span>
            <span className="ml-1 text-gray-500">(4)</span>
          </div>
          <p className="text-gray-600 mt-2 text-lg font-medium">
            Pizza topped with our herb-infused signature pan sauce and 100%
            mozzarella cheese. A classic treat for all cheese lovers out there!
          </p>
        </div>

        <div className="ml-4 w-[155px] h-[140px] text-center">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/4/17/ef2f1053-c8e3-4072-aaa7-4539a67c8554_e8da5065-4d03-47d7-bad7-5413398a1564.jpg_compressed"
            alt="Margherita"
            className="rounded-lg mb-2 w-full h-full"
          />
          <div className="-mt-6">
            <button className="text-green-500 w-[110px] h-[35px] bg-white text-lg font-bold px-4 py-1 -mt-[60px] rounded shadow hover:bg-gray-100 ">
              ADD
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">Customisable</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
