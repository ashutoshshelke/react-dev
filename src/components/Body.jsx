import { useEffect, useState } from "react";
import RestaurantCard, { withDiscountInfo } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const RestaurantCardDiscountInfo = withDiscountInfo(RestaurantCard);

  useEffect(() => {
    async function fetchData() {
      try {
        const url =
          "https://api.codetabs.com/v1/proxy?quest=https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6281261%26lng=73.7867629%26is-seo-homepage-enabled=true%26page_type=DESKTOP_WEB_LISTING";

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const swiggyData = await response.json();
        const allRestaurants =
          swiggyData.data.cards[4].card.card.gridElements.infoWithStyle
            .restaurants;
        setListOfRestaurants(allRestaurants);
        setFilteredRestaurants(allRestaurants);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>It looks like you are offline!</h1>;

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="border"
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
        {filteredRestaurants?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info?.aggregatedDiscountInfoV3 ? (
              <RestaurantCardDiscountInfo data={restaurant} />
            ) : (
              <RestaurantCard data={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
