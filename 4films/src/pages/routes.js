import { lazy } from "react";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage/login";

export default [
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/",
    component: HomePage,
  },
];
