import React from "react";
import LoginComponent from "../../components/LoginComponent";
import "./css/style.css";
const LoginPage = () => {
  return (
    <div className="login__films">
      <div className="login__container">
        <h1> User Login</h1>
        <LoginComponent />
      </div>
    </div>
  );
};

export default LoginPage;
