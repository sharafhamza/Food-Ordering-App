import React from "react";

const FoodItem = ({ info, handleAdd }) => {
  const { name, price, description, ratings, imageId } = info;

  return (
    <div className="px-5 cursor-pointer border-b border-gray-300 pt-8 pb-[60px]">
      <div className="rounded-lg flex items-start justify-between bg-white gap-x-6">
        <div>
          <div className="w-[20px] h-[20px] rounded-md border-2 translate-y-[5px] border-green-700 flex items-center justify-center bg-white cursor-pointer mb-4">
            <div className="w-[9px] h-[9px] bg-green-700 rounded-full"></div>
          </div>
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <p className="text-base text-black font-semibold mt-1">
            ₹{price ? price / 100 : "N/A"}
          </p>
          {ratings?.aggregatedRating?.rating && (
            <div className="flex items-center text-green-600 text-sm mt-1">
              <span className="font-bold">
                ★ {ratings.aggregatedRating.rating}
              </span>
              <span className="ml-1 text-gray-500">
                ({ratings.aggregatedRating.ratingCount || "0"})
              </span>
            </div>
          )}
          <p className="text-gray-600 mt-2 text-base font-medium w-[600px]">
            {description}
          </p>
        </div>

        <div className="w-[155px] h-[160px] relative">
          <img
            src={
              imageId
                ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`
                : "https://via.placeholder.com/150"
            }
            className="w-full h-full rounded-2xl"
            alt={name}
          />
          {handleAdd && (
            <div
              className="absolute bottom-0 right-0 -translate-x-[14px] translate-y-4"
              onClick={() => handleAdd(info)}
            >
              <button className="text-green-500 font-bold text-lg w-[120px] py-2 bg-white rounded-md border">
                ADD
              </button>
            </div>
          )}
          <p className="mt-5 text-center font-semibold text-gray-500 text-sm">
            Customisable
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
