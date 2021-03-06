const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//routes
const todoRouter = require("./routes/todoRoutes");

//models
const Todos = require("./models/todos");

//middleware
const {
  signUpUser,
  loginUser,
  loginUsername,
  authorize,
} = require("./middlewares/authenticate");

dotenv.config({ path: ".env" });
const PORT = process.env.PORT;
let dbURI;

if (process.env.DEBUG == "false") {
  dbURI = process.env.DATABASE_URL;
} else {
  dbURI = process.env.LOCAL_DB_URL;
}
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
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Hi I am Server", data: "no data on this endpoint" });
});

app.post("/login/username", loginUsername);
app.post("/signup", signUpUser);
app.post("/login", loginUser);
app.use("/todos", authorize, todoRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
