const express = require("express");
const mongoose = require("mongoose");
const Champions = require("../models/champions");

const Items = require("../models/items");
const router = express.Router();

mongoose.connect("mongodb://localhost:27017/LolDex");

// // ------------------- Champions ---------------

router.get("/findall", async (req, res) => {


  const champ = await Champions.find();

  return res.json(champ);
});

router.get("/findname/:nome", async (req, res) => {
  const { nome } = req.params;

  try{
    const champ = await Champions.findOne({ name: nome });
    console.log(champ)
    return res.json(champ);
  }catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
});

router.get("/findclass/:classe", async (req, res) => {
  const { classe } = req.params;
  const champ = await Champions.find({ tags: classe });
  return res.json(champ);
});



// // ------------------- Champions ---------------

// // ------------------- Items ---------------

router.get("/findallitems", async (req, res) => {
  const item = await Items.find();

  return res.json(item);
});

router.get("/findiditems/:id", async (req, res) => {
  const { id } = req.params;
  const item = await Items.findOne({ item_id: id });

  return res.json(item);
});

router.get("/findnameitems/:nome", async (req, res) => {
  const { nome } = req.params;
  const item = await Items.findOne({ name: nome });

  return res.json(item);
});

// // ------------------- Items ---------------

router.post("/array", async (req, res) => {

})

module.exports = router;
