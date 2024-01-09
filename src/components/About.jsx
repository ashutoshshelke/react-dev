import React from "react";
import User from "./User";

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
        <User name="First" />
        <User name="Second" />
        <User name="Third" />
      </div>
    );
  }
}

export default About;
