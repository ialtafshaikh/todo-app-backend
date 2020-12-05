const express = require("express");
const mongoose = require("mongoose");

//models
const Todos = require("./models/todos");

var config = require("./config");

const PORT = 3000;
const dbURI = config.mongoUrl;

const connect = mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connect.then(
  (db) => {
    console.log("Connected Successfully to Mongodb Server");
  },
  (err) => {
    console.log(err);
  }
);

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Hi I am Server", data: "no data on this endpoint" });
});

app.get("/todos", (req, res) => {
  Todos.find({})
    .then(
      (todos) => {
        res.status(200);
        res.setHeader("Content-Type", "application/json");
        res.json(todos);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

app.post("/todos", (req, res) => {
  Todos.create(req.body)
    .then(
      (todo) => {
        console.log("Todo Created ", todo);
        res.status(200);
        res.setHeader("Content-Type", "application/json");
        res.json({ status: "todo added successfully", data: todo });
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

app.get("/todos/:id", (req, res) => {
  res.send("routes to get single todo");
});

app.put("/todos/:id", (req, res) => {
  res.send("routes to update the todo");
});

app.delete("/todos/:id", (req, res) => {
  res.send("routes to delete the todo");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
