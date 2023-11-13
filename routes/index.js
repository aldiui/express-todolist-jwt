const express = require("express");
const verifyToken = require("../middleware/auth");
const userRoutes = require("./user-route");
const todoRoutes = require("./todo-route");
const authRoutes = require("./auth-route");

const route = express.Router();
route.get("/", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Selamat Datang di api ",
    });
});
route.use("/", authRoutes);
route.use("/user", verifyToken, userRoutes);
route.use("/todos", verifyToken, todoRoutes);

module.exports = route;
