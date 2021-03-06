const express = require("express");
const router = express.Router();

// middleware that is specific to this router

router.use(function timeLog (req, res, next) {
  console.log("Time: ", Date.now());
});

// define the home page route
router.get("/", function(req, res) {
  res.send("Birds home page");
});

// define the about page
router.get("/about", function(req, res) {
  res.send("About birds");
});

module.exports = router;
