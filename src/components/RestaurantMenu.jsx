import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [restaurantData, setRestaurantData] = useState({});
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const items = await data.json();
    setMenuItems(
      items.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
    setRestaurantData(items.data.cards[0].card.card.info);
  };

  if (menuItems.length === 0) return <Shimmer />;

  const { name, costForTwoMessage, cuisines, areaName, avgRating } =
    restaurantData;

  return (
    <div>
      <div>
        <h1> {name}</h1> <h2> {areaName} </h2>
        <h2> {cuisines.join(", ")}</h2>
        <h3> {costForTwoMessage} </h3>
        <h3> {avgRating}</h3>
        <h2>Menu</h2>
      </div>
      {menuItems.map((menuItem) => {
        const { name, defaultPrice, price, id } = menuItem.card.info;
        return (
          <h4 key={id}>
            {name} Rs.{price / 100 || defaultPrice / 100}
          </h4>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
