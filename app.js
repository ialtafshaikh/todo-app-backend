const express = require("express");
const mongoose = require("mongoose");

const PORT = 3000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Hi I am Server", data: "no data on this endpoint" });
});

app.get("/todos", (req, res) => {
  res.send("routes to get all the todos list");
});

app.post("/todos", (req, res) => {
  res.send("routes to create new todo");
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
