const mongoose = require("mongoose");
const uniquid = require("uniquid");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  taskID: {
    type: String,
    default: uniquid(),
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  startedAt: {
    type: Date,
    default: new Date(),
  },
  completedAt: {
    type: Date,
  },
});

var Todos = mongoose.model("Todo", todoSchema);

module.exports = Todos;
