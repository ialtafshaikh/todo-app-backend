const express = require("express");
const mongoose = require("mongoose");

const mongoDBURL = "some url";
const PORT = 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
