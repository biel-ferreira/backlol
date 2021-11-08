const mongoose = require("mongoose");

const champions = mongoose.model("champions", {
  
  id: String,
  name: String,
  title: String,
  blurb: String,
  tags: Array,

});

module.exports = champions;
