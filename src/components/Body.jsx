import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";

const Body = () => {
  const [resData, setResData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const newData =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants[0]?.info;

    setResData(newData);
    console.log(newData);

    return json;
  };
  return (
    <div>
      <RestaurentCard resData={resData} />
    </div>
  );
};

export default Body;
