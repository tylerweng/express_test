const express = require("express");
const app = express();

app.all("/secret", function(req, res, next) {
  console.log("Accessing the secret session ...");
  next();
});

app.get("/", function(req, res){
  res.send("Hello World! I'm an express app from test2.js");
});

app.get("/json", function(req, res){
  res.json({
    ab: 12,
    cd: 13
  });
});

app.listen(3000, function(){
  console.log("Test2 app listening on port 3000!");
});
