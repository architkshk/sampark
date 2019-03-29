const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

let app = express();
app.use(cors());
app.use(bodyParser.json());

const { mongoose } = require("./db/");

app.listen(5000, () => {
  console.log("Sever running on port 5000");
});
