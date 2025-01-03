import React from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, cuisines, avgRating, name, costForTwo } =
    resData?.info;

  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt={name}
          className="w-full h-60 object-cover rounded-t-2xl"
        />
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <span className="bg-black bg-opacity-60 text-white px-4 py-2 rounded-full font-semibold text-lg">
            {costForTwo}
          </span>
          <div className="flex items-center bg-black bg-opacity-50 px-3 py-1 rounded-full text-white">
            <span className="text-xl font-bold mr-1">★</span>
            {avgRating}
          </div>
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600 mt-2">{cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
