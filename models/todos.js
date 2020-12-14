const mongoose = require("mongoose");
const uniquid = require("uniquid");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

var Todos = mongoose.model("Todo", todoSchema);

module.exports = Todos;
