const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");

const { mongoose } = require("./db/");

let app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/auth", require("./routes/auth"));

app.listen(5000, () => {
  console.log("Sever running on port 5000");
});
