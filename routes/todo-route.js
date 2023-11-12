const express = require("express");
const { getAllTodo, createTodo, getTodoById, updateTodo, deleteTodo, deleteAllTodo } = require("../controllers/todo-controller");
const { todoValidationRules, todoValidate } = require("../validators/todo-validator");

const route = express.Router();

route.post("/", todoValidationRules(), todoValidate, createTodo);
route.get("/", getAllTodo);
route.get("/:id", getTodoById);
route.put("/:id", todoValidationRules(), todoValidate, updateTodo);
route.delete("/:id", deleteTodo);
route.delete("/", deleteAllTodo);

module.exports = route;
