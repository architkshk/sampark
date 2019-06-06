const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");

const { mongoose } = require("./db/");

let app = express();
app.use(cors());
app.use(bodyParser.json());

//socket.io start
const http = require('http').Server(app);
const io = require('socket.io')(http);
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('User Disconnected');
  });
  socket.on('example_message', function(msg){
    console.log('message: ' + msg);
  });
});
io.listen(8000);

//socket.io ends

app.use("/auth", require("./routes/auth"));
app.use(require("./routes/group"));
app.use("/", require("./routes/index"));
app.use(require("./routes/notification"));
app.listen(5000, () => {
  console.log("Sever running on port 5000");
});
