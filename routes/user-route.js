const express = require("express");
const { getUserByToken } = require("../controllers/user-controller");

const route = express.Router();

route.get("/", getUserByToken);

module.exports = route;
