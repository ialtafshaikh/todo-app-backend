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

//middleware
const {
  verifyQueryParams,
  verifyPostRequest,
} = require("../middlewares/todoMiddlewares");

const todoRoute = express.Router();

todoRoute
  .route("/")
  .get(verifyQueryParams, getAllTodos)
  .post(verifyPostRequest, createTodo);
todoRoute.route("/:id").get(getTodoById).put(updateTodo).delete(deleteTodo);
todoRoute.route("/taskcompletion/:id").get(taskCompletionTime);

module.exports = todoRoute;
