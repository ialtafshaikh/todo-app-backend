//models
const Todos = require("../models/todos");

// res => will contain currentUser object currently logged in
const getAllTodos = (req, res, next) => {
  if (Object.keys(req.query).length != 0) {
    req.query._id = 0;
    req.query.taskID = 1;
    Todos.find({ author: res.currentUser._id })
      .select(req.query)
      .then((todos) => {
        res.status(200);
        res.setHeader("Content-Type", "application/json");
        res.json({ todos: todos, currentUser: res.currentUser });
      })
      .catch((err) => {
        res.status(500);
        res.json({ error: err });
      });
  } else {
    Todos.find({ author: res.currentUser._id })
      .then((todos) => {
        res.status(200);
        res.setHeader("Content-Type", "application/json");
        res.json({ todos: todos, currentUser: res.currentUser });
      })
      .catch((err) => {
        res.status(500);
        res.json({ error: err });
      });
  }
};

const createTodo = (req, res, next) => {
  req.body.author = res.currentUser._id;
  Todos.create(req.body)
    .then((todo) => {
      res.status(200);
      res.setHeader("Content-Type", "application/json");
      res.json({ status: "Todo added successfully", data: todo });
    })
    .catch((err) => {
      res.status(404);
      res.json({ message: "Invalid Object Property", error: err });
    });
};

const getTodoById = (req, res, next) => {
  Todos.findById(req.params.id)
    .then((todo) => {
      if (todo.author == res.currentUser._id) {
        res.status(200);
        res.setHeader("Content-Type", "application/json");
        res.json(todo);
      } else {
        res.status(401);
        res.json({ message: "unauthorized operation" });
      }
    })
    .catch((err) => {
      res.status(404);
      res.json({ message: "Id did not exists", error: err });
    });
};

const updateTodo = (req, res, next) => {
  Todos.findById(req.params.id)
    .then((todo) => {
      if (todo.author == res.currentUser._id) {
        req.body.completedAt = new Date();
        Todos.findByIdAndUpdate(
          { _id: req.params.id },
          {
            $set: req.body,
          },
          { new: true, useFindAndModify: false } //get updated result
        )
          .then((todo) => {
            res.status(200);
            res.setHeader("Content-Type", "application/json");
            res.json(todo);
          })
          .catch((err) => {
            res.status(404);
            res.json({ message: "unable to update", error: err });
          });
      } else {
        res.status(401);
        res.json({ message: "unauthorized operation" });
      }
    })
    .catch((err) => {
      res.status(404);
      res.json({ message: "Id did not exists", error: err });
    });
};
const deleteTodo = (req, res, next) => {
  Todos.findById(req.params.id)
    .then((todo) => {
      if (todo.author == res.currentUser._id) {
        Todos.findByIdAndRemove(req.params.id)
          .then((response) => {
            res.status(200);
            res.setHeader("Content-Type", "application/json");
            res.json({
              status: "Todo deleted successfully",
              response: response,
            });
          })
          .catch((err) => {
            res.status(404);
            res.json({ message: "unable to delete", error: err });
          });
      } else {
        res.status(401);
        res.json({ message: "unauthorized operation" });
      }
    })
    .catch((err) => {
      res.status(404);
      res.json({ message: "Id did not exists", error: err });
    });
};

const taskCompletionTime = (req, res, next) => {
  Todos.findById(req.params.id).then(({ startedAt, completedAt }) => {
    const completionTime = completedAt - startedAt;
    const minutes = ((completionTime % 86400000) % 3600000) / 60000;
    res.status(200);
    res.setHeader("Content-Type", "application/json");
    res.json({ taskCompletionTime: minutes + "mins" });
  });
};

module.exports = {
  getAllTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
  taskCompletionTime,
};
