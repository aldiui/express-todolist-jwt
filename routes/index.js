const express = require("express");
const verifyToken = require("../middleware/auth");
const userRoutes = require("./user-route");
const todoRoutes = require("./todo-route");
const authRoutes = require("./auth-route");

const route = express.Router();

route.use("/", authRoutes);
route.use("/user", verifyToken, userRoutes);
route.use("/todos", verifyToken, todoRoutes);

module.exports = route;
