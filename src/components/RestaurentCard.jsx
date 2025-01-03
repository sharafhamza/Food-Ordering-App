import React from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, cuisines, avgRating, name, costForTwo } =
    resData?.info;

  return (
    <div className="max-w-sm bg-white rounded-3xl col-span-3 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Image Section */}
      <div className="relative rounded-t-3xl overflow-hidden">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt={name}
          className="w-full h-56 object-cover transform hover:scale-110 transition-all duration-300"
        />
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white">
          {/* Price */}
          <span className="bg-black bg-opacity-60 px-4 py-2 rounded-full text-xl font-semibold">
            {costForTwo}
          </span>
          {/* Rating */}
          <div className="flex items-center bg-black bg-opacity-50 px-4 py-2 rounded-full text-white text-lg font-semibold">
            <span className="mr-2">★</span>
            {avgRating}
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="p-5 space-y-3">
        {/* Restaurant Name */}
        <h2 className="text-2xl font-extrabold text-gray-800">{name}</h2>

        {/* Cuisines */}
        <p className="text-sm text-gray-600 font-medium">
          {cuisines.join(", ")}
        </p>

        {/* Hoverable Card with Shadow */}
        <div className="flex justify-center mt-4"></div>
      </div>
    </div>
  );
};

export default RestaurantCard;
