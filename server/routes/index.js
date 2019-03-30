const express = require("express");
const router = express.Router();
let { State } = require("../models/state");
let { City } = require("../models/city");

router.route("/data/states").get(async (req, res) => {
  let states = await State.find({});
  res.send(states);
});

router.route("/data/cities/:stateId").get(async (req, res) => {
  let stateId = req.params.stateId;
  let cities = await City.find({ stateId });
  res.send(cities);
});

module.exports = router;
