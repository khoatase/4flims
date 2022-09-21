import React from "react";
import getinfoUser from "../utils/token";
import { Navigate } from "react-router-dom";
const PrivateRoot = ({ component }) => {
  const token = getinfoUser();

  return token ? component : <Navigate to="/login" />;
};

export default PrivateRoot;
