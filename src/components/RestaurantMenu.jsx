import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [catShowIndex, setCatShowIndex] = useState(0);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo.length === 0) return <Shimmer />;

  const { name, costForTwoMessage, cuisines, areaName, avgRating } =
    resInfo.cards[0].card.card.info;

  const categories =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <div>
        <h1 className="font-bold my-6 text-2xl"> {name}</h1>
        <h2 className="font-bold text-lg"> {areaName} </h2>
        <h2> {cuisines.join(", ")}</h2>
        <h3> {costForTwoMessage} </h3>
        <h3> {avgRating}</h3>
        <h2>Menu</h2>
      </div>

      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            showItems={index === catShowIndex ? true : false}
            key={category.card.card.title}
            category={category}
            setCatShowIndex={setCatShowIndex}
            index={index}
            catShowIndex={catShowIndex}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
