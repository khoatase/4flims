const express = require("express");
const authentication = require("./Authentication");
const routes = express.Router();
const mdwToken = require("../middlewares/Token");

routes.use("/auth", authentication);
module.exports = routes;
