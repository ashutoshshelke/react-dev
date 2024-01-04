import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement(
//       "h1",
//       { id: "heading" },
//       "Hello world from Ashutosh React!"
//     )
//   )
// );

const Title = () => <h1 id="heading">Namaste React using JSX</h1>

const Heading = () => <div>
  <Title />
  <h1 className="head">Hello from React component!</h1>
</div>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);