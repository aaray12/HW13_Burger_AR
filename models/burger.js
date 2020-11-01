var orm = require("../config/orm");

var burger = {
    all: function(cb) {
      orm.selectAll(function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(burgName, dev, cb) {
      orm.insertOne(burgName, dev, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.updateOne(objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  module.exports = burger;