const express = require("express");
const app = express();
const cors = require("cors");
const find = require("./routes/findName");

const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/LolDex");
}

app.use(cors());

app.use(express.json());

app.use(find);

app.listen(3001, () => {
  console.log("Lolzin ta on!");
});
