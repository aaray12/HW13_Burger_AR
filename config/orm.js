var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function() {
    var queryString = "SELECT * FROM burgers"
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  insertOne: function( burger_name, devoured, cb) {
    var queryString = "INSERT INTO burgers";

    queryString += " (";
    queryString += burger_name.toString() + "," + devoured;
    queryString += ") ";
    queryString += "VALUES (";
    queryString += "??, ??";
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  updateOne: function( objColVals, condition, cb) {
    var queryString = "UPDATE burgers";

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
}
module.exports = orm;
