import { useState, useEffect } from "react";
import OnMindSlider from "../components/onMindSlider/onMindSlider";
import Card from "./card/Card";
import { Search } from "lucide-react";

const Body = () => {
  const [resInfo, setResInfo] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [seartext, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value); // store user input in state
  };

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
    setFilterData(
      json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredData = cardData.filter((res) =>
      res?.info?.name.toLowerCase().includes(seartext.toLowerCase())
    );
    setFilterData(filteredData);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  console.log(cardData);

  return (
    <div className="max-w-container mx-auto">
      <OnMindSlider resInfo={resInfo} />
      <div className="flex items-center w-full max-w-md mx-auto mt-4 mb-10">
        <input
          type="text"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Search..."
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
        <button
          className="bg-blue-600 text-white p-2 rounded-r-full hover:bg-blue-700 transition"
          onClick={handleSearch}
        >
          <Search size={20} />
        </button>
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-5">
        {filterData.map((card, index) => (
          <Card data={card?.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
