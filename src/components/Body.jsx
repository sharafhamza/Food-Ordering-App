import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { SWIGGY_API_URL } from "../utils/constant";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [showTopRestaurants, setShowTopRestaurants] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <>
      <button
        onClick={() => {
          const filterData = listOfRestaurants.filter((res) => {
            Number(res?.info?.avgRating) > 4.4;
          });

          setShowTopRestaurants(!showTopRestaurants);
          setListOfRestaurants(filterData);
        }}
        className="bg-yellow-500 text-white px-6 py-2 ml-4 mt-4 rounded-full font-semibold hover:bg-yellow-600 transition-all duration-300"
      >
        {showTopRestaurants ? "Show All Restaurants" : "Top Restaurants (4.2+)"}
        Restaurent
      </button>
      <div class="flex items-center max-w-lg mx-auto bg-white shadow-md rounded-full overflow-hidden">
        <input
          type="text"
          placeholder="Search for food, dishes, or restaurants..."
          class="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
        />
        <button class="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
          Search
        </button>
      </div>
      <div className="grid grid-cols-12 gap-4 mx-4 mt-4">
        {listOfRestaurants.map((restaurents, index) => (
          <RestaurentCard resData={restaurents} key={index} />
        ))}
      </div>
    </>
  );
};

export default Body;
