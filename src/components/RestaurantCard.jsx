import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ data: { info } }) => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + info.cloudinaryImageId} />
      <h3>{info.name}</h3>
      <h4>{info.costForTwo}</h4>
      <h4>{info.cuisines.join(",")}</h4>
      <h4>{info.avgRating}</h4>
      <h4>{info.sla.slaString}</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

//Higher order component

export const withDiscountInfo = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="discountInfo">
          {props.data.info.aggregatedDiscountInfoV3.header +
            " " +
            props.data.info.aggregatedDiscountInfoV3.subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
