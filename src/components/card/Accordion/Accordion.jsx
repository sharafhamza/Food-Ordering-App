import React from "react";

const Accordion = ({ name, price, description, image, rating }) => {
  return (
    <>
      <div className="border-t-[14px] border-gray-200 mt-4 py-2 px-5 cursor-pointer">
        <div className="rounded-lg shadow-sm flex items-start justify-between bg-white mt-4">
          <div className="flex-1">
            <div className="w-[20px] h-[20px] rounded-md border-2 translate-y-[5px] border-green-700 flex items-center justify-center bg-white cursor-pointer mb-4">
              <div className="w-[9px] h-[9px] bg-green-700 rounded-full"></div>
            </div>
            <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
            <p className="text-base text-black font-semibold mt-1">₹{price}</p>
            <div className="flex items-center text-green-600 text-sm mt-1">
              <span className="font-bold">★ {rating}</span>
              <span className="ml-1 text-gray-500">(4)</span>
            </div>
            <p className="text-gray-600 mt-2 text-lg font-medium">
              {description}
            </p>
          </div>

          <div className="ml-4 w-[155px] h-[140px] text-center">
            <img
              src={image}
              alt={name}
              className="rounded-lg mb-2 w-full h-full"
            />
            <div className="-mt-6">
              <button className="text-green-500 w-[110px] h-[35px] bg-white text-lg font-bold px-4 py-1 -mt-[60px] rounded shadow hover:bg-gray-100">
                ADD
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">Customisable</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
