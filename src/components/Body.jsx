import { useState, useEffect } from "react";
import OnMindSlider from "../components/onMindSlider/onMindSlider";
import Card from "./card/Card";
const Body = () => {
  const [resInfo, setResInfo] = useState([]);
  const [cardData, setCardData] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setResInfo(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info || []
    );
    setCardData(
      json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(cardData);

  return (
    <div className="max-w-container mx-auto">
      <OnMindSlider resInfo={resInfo} />
      <div className="flex flex-wrap gap-x-3 gap-y-5">
        {cardData.map((card, index) => (
          <Card data={card?.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
