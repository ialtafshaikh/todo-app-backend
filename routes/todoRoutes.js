const express = require("express");

//contollers
const {
  getAllTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
  taskCompletionTime,
} = require("../controllers/todoControllers");

const todoRoute = express.Router();

todoRoute.route("/").get(getAllTodos).post(createTodo);
todoRoute.route("/:id").get(getTodoById).put(updateTodo).delete(deleteTodo);
todoRoute.route("/taskcompletion/:id").get(taskCompletionTime);

module.exports = todoRoute;
