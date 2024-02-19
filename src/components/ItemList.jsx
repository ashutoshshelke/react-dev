import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }

  return (
    <div>
      {items.map((item) => {
        const { name, defaultPrice, price, id, description, imageId } =
          item.card.info;
        return (
          <div
            key={id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{name} - </span>
                <span>₹ {price / 100 || defaultPrice / 100}</span>
              </div>
              <p className="text-xs">{description}</p>
            </div>
            <div className="w-3/12 p-4 ">
              <div className="absolute">
                <button className="p-2 mx-16 bg-black text-white rounded-lg shadow-lg"
                  onClick={() => handleAddItem(item)}>
                  Add +
                </button>
              </div>
              {imageId && <img className="w-full" src={CDN_URL + imageId} />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
