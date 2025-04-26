import { useState, useEffect } from "react";
import OnMindSlider from "../components/onMindSlider/onMindSlider";
import Card from "./card/Card";
import { Search } from "lucide-react";
import ShimmerCard from "./shimmerCard/ShimmerCard";
import { Link } from "react-router-dom";

const Body = () => {
  const [resInfo, setResInfo] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [seartext, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
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
    setLoading(false);
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
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
        />
        <button
          className="bg-orange-500 text-white p-2 rounded-r-full hover:bg-orange-600 transition"
          onClick={handleSearch}
        >
          <Search size={22} />
        </button>
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-5">
        {loading ? (
          Array(8)
            .fill(0)
            .map((_, i) => <ShimmerCard key={i} />)
        ) : filterData.length === 0 ? (
          <p>Search item not found</p>
        ) : (
          filterData.map((card) => (
            <Link to={"restaurents/" + card?.info?.id} className="w-[24%]">
              <Card key={card?.info?.id} data={card?.info} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
