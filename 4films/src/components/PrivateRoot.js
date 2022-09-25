import React from "react";
// import getinfoUser from "../utils/token";
import { Navigate } from "react-router-dom";
import getToken from "../utils/token";
const PrivateRoot = ({ component }) => {
  const token = getToken();
  console.log(token);
  return token ? component : <Navigate to="/login" />;
};

export default PrivateRoot;
