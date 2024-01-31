import React from "react";
import User from "./User";
import UserContext from "../utils/UserContext";

class About extends React.Component {

  constructor() {
    super();
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent component mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <UserContext.Consumer>
          {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
        </UserContext.Consumer>
        <User name="First" />
        <User name="Second" />
        <User name="Third" />
      </div>
    );
  }
}

export default About;
