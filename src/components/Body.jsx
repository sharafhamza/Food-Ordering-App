import React, { useState, useEffect } from "react";

const fetchData = async () => {
  const [resInfo, setResInfo] = useState([]);

  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const json = await data.json();
  setResInfo(
    json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
  );
};

useEffect(() => {
  fetchData();
}, []);
const Body = () => {
  return <OnMindSlider resData={resInfo} />;
};

export default Body;
