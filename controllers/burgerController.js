var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    //  console.log("burgerController: ",hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
    burger.create(req.body.newBurger, function(data) {
    res.redirect("/")
  })
})

router.put("/api/burger/:id", function(req, res) {
  burger.update("devoured", req.body.devoured, "id", req.params.id, function(data)
  {
    if (data.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
