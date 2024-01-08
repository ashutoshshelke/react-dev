import { useState } from "react";

const Login = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <button
      className="login-btn"
      onClick={() => {
        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
      }}
    >
      {btnName}
    </button>
  );
}; 

export default Login;
