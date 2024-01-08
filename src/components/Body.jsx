import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.allorigins.win/get?url=${encodeURIComponent(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6281261&lng=73.7867629&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          )}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const data = await response.json();
        const swiggyData = JSON.parse(data?.contents);
        const allRestaurants =
          swiggyData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        setListOfRestaurants(allRestaurants);
        setFilteredRestaurants(allRestaurants);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
    fetchData();
  }, []);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              e.target.value.length === 0
                ? setFilteredRestaurants(listOfRestaurants)
                : null;
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              setFilteredRestaurants(
                listOfRestaurants.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestaurants(
              listOfRestaurants.filter((res) => res.info.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard data={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
