const express = require("express");
const { registerUser, loginUser, logoutUser } = require("../controllers/auth-controller");
const verifyToken = require("../middleware/auth");
const { getUserByToken } = require("../controllers/user-controller");
const { getAllTodo, createTodo, getTodoById, updateTodo, deleteTodo, deleteAllTodo } = require("../controllers/todo-controller");
const { todoValidationRules, todoValidate } = require("../validators/todo-validator");
const { registerValidationRules, registerValidate, loginValidationRules, loginValidate } = require("../validators/auth-validator");

const route = express.Router();

route.post("/register", registerValidationRules(), registerValidate, registerUser);
route.post("/login", loginValidationRules(), loginValidate, loginUser);
route.get("/logout", verifyToken, logoutUser);

route.get("/user", verifyToken, getUserByToken);

route.post("/todo", verifyToken, todoValidationRules(), todoValidate, createTodo);
route.get("/todo", verifyToken, getAllTodo);
route.get("/todo/:id", verifyToken, getTodoById);
route.put("/todo/:id", verifyToken, todoValidationRules(), todoValidate, updateTodo);
route.delete("/todo/:id", verifyToken, deleteTodo);
route.delete("/todo", verifyToken, deleteAllTodo);

module.exports = route;
