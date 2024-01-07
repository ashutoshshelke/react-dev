import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ data: { info } }) => {
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + info.cloudinaryImageId} />
      <h3>{info.name}</h3>
      <h4>{info.costForTwo}</h4>
      <h4>{info.cuisines.join(",")}</h4>
      <h4>{info.avgRating}</h4>
      <h4>{info.sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
