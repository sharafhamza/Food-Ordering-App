import React from "react";

const RestaurentCard = ({ resData }) => {
  console.log(resData);

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
          alt="Dish Image"
          className="w-full h-52 object-cover"
        />
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
          4.5 ★
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">Chicken Biryani</h2>
        <p className="text-sm text-gray-500 mt-1">
          Aromatic and flavorful chicken biryani made with fresh spices and
          long-grain basmati rice.
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-gray-800">$8.99</span>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurentCard;
