import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({
  category,
  showItems,
  setCatShowIndex,
  index,
  catShowIndex
}) => {
  const menuItems = category.card.card.itemCards;

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => (catShowIndex === index) ? setCatShowIndex(-1) : setCatShowIndex(index)}
      >
        <span className="font-bold text-lg">
          {category.card.card.title} ({menuItems.length})
        </span>
        <span>🔽</span>
      </div>

      {showItems && <ItemList items={menuItems} />}
    </div>
  );
};

export default RestaurantCategory;
