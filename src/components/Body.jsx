import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";

const Body = () => {
  const [resData, setResData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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
