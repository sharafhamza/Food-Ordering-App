import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";

const Body = () => {
  const [resData, setResData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setResData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="grid grid-cols-12 gap-4 mx-4 mt-4">
      {resData.map((restaurents, index) => (
        <RestaurentCard resData={restaurents} key={index} />
      ))}
    </div>
  );
};

export default Body;
