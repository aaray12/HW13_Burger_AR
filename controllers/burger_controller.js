var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

//Create (CRUD)-> INSERT via POST request
// router.post("/api/burgers", (req, res) =>
// {
//   burger.insertOne(req.body.burger_name, (result) =>
//   {
//     // Send back the ID of the new item
//     res.json({ id: result.insertId });
//   });
// });
router.post("/api/burgers", function(req, res) {

    console.log("ADDING ROUTE", req.body)
    burger.insertOne(['burger_name'],[req.body.burger_name],function(data) {
      // Makes page auto refresh once we are done
      //.send has a built in END 
      res.send('ADDED')
    });
});
module.exports = router;