import React from "react";
import ReactDOM from "react-dom/client";
import restaurants from './restaurants.json';

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - ResturantCard
 *      - Img
 *      - Name of Res, star rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://miro.medium.com/v2/resize:fit:1400/1*yyXpee24U5wQMhe1BDgUiA.png" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = ({data: {info}}) => {
  return <div className="res-card">
    <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+info.cloudinaryImageId} />
    <h3>{info.name}</h3>
    <h4>{info.costForTwo}</h4>
    <h4>{info.cuisines.join(",")}</h4>
    <h4>{info.avgRating}</h4>
    <h4>{info.sla.slaString}</h4>
  </div>
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurants.map((restaurant) => <RestaurantCard key={restaurant.info.id} data={restaurant} />)}
      </div>

    </div>
  )
}

const AppLayout = () => {
  return <>
    <div className="app">
      <Header />
      <Body />
    </div>
  </>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);