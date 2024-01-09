import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo.length === 0) return <Shimmer />;

  const { name, costForTwoMessage, cuisines, areaName, avgRating } =
    resInfo.cards[0].card.card.info;

  const menuItems =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards;

  return (
    <div>
      <div>
        <h1> {name}</h1>
        <h2> {areaName} </h2>
        <h2> {cuisines.join(", ")}</h2>
        <h3> {costForTwoMessage} </h3>
        <h3> {avgRating}</h3>
        <h2>Menu</h2>
      </div>
      {menuItems.map((menuItem) => {
        const { name, defaultPrice, price, id } = menuItem.card.info;
        return (
          <li key={id}>
            <strong>{name}</strong> Rs.{price / 100 || defaultPrice / 100}
          </li>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
