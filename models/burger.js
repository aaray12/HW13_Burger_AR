var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
      orm.selectAll(function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
        console.log('CREATE BURGER')
        orm.insertOne("burgers", cols, vals, function(res) {
          cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne(objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  module.exports = burger;