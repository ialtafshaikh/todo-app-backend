const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

//routes
const todoRouter = require("./routes/todoRoutes");

//models
const Todos = require("./models/todos");

dotenv.config({ path: ".env" });
const PORT = process.env.PORT;
const dbURI = process.env.DATABASE_URL;

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

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Hi I am Server", data: "no data on this endpoint" });
});

app.use("/todos", todoRouter);

// app.get("/todos", (req, res) => {
//   Todos.find({})
//     .then((todos) => {
//       res.status(200);
//       res.setHeader("Content-Type", "application/json");
//       res.json(todos);
//     })
//     .catch((err) => {
//       res.status(500);
//       res.json({ error: err });
//     });
// });

// app.post("/todos", (req, res) => {
//   Todos.create(req.body)
//     .then((todo) => {
//       res.status(200);
//       res.setHeader("Content-Type", "application/json");
//       res.json({ status: "Todo added successfully", data: todo });
//     })
//     .catch((err) => {
//       res.status(404);
//       res.json({ message: "Invalid Object Property", error: err });
//     });
// });

// app.get("/todos/:id", (req, res) => {
//   Todos.findById(req.params.id)
//     .then((todo) => {
//       res.status(200);
//       res.setHeader("Content-Type", "application/json");
//       res.json(todo);
//     })
//     .catch((err) => {
//       res.status(404);
//       res.json({ message: "Id did not exists", error: err });
//     });
// });

// app.put("/todos/:id", (req, res) => {
//   Todos.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: req.body,
//     },
//     { new: true } //get updated result
//   )
//     .then((todo) => {
//       res.status(200);
//       res.setHeader("Content-Type", "application/json");
//       res.json(todo);
//     })
//     .catch((err) => {
//       res.status(404);
//       res.json({ message: "Id did not exists", error: err });
//     });
// });

// app.delete("/todos/:id", (req, res) => {
//   Todos.findByIdAndRemove(req.params.id)
//     .then((response) => {
//       res.status(200);
//       res.setHeader("Content-Type", "application/json");
//       res.json({ status: "Todo deleted successfully", response: response });
//     })
//     .catch((err) => {
//       res.status(404);
//       res.json({ message: "Id did not exists", error: err });
//     });
// });

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
