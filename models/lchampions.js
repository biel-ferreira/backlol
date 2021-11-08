const mongoose = require("mongoose");

const lchampions = mongoose.model("champions", {
  id: String,
  name : String,
  title: String,
  blurb : String,
  tags: Array,
});

module.exports = lchampions;
