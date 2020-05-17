var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(name, cb) {
        orm.create("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], cb);
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }

    // update: function(id, cb) {
    //     var condition = "id=" + id;
    //     orm.update("cats", objColVals, condition, function(res) {
    //         cb(res);
    //     });
    // }

};

module.exports = burger;