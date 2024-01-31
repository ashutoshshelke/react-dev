import { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import Login from "./Login";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img className="w-52" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>{" "}
          </li>
          <li>Cart</li>
          <Login />
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
