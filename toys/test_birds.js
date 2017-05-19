const express = require("express");
const app = express();
const birds = require("./birds");

app.use("/birds", birds);

app.get("/", function(req, res){
  res.send("Hello World! I'm an express app from test_birds.js");
});

app.listen(3000, function(){
  console.log("TestBirds app listening on port 3000!");
});
