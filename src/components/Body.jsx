import restaurants from "../restaurants.json";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} data={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
