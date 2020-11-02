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
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: true
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
module.exports = router;