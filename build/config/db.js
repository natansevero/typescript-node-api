"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var DataBase = (function () {
    function DataBase() {
        this.DB_URI = 'mongodb://localhost/ts-rest-api';
    }
    DataBase.prototype.createConnection = function () {
        if (process.env.NODE_ENV == 'production') {
            mongoose.connect(process.env.MONGODB_URI);
            this.logger(process.env.MONGODB_URI);
        }
        else {
            mongoose.connect(this.DB_URI);
            this.logger(this.DB_URI);
        }
    };
    DataBase.prototype.logger = function (uri) {
        this.DB_CONNECTION = mongoose.connection;
        this.DB_CONNECTION.on('connected', function () { return console.log("Mongoose esta connectado ao " + uri); });
        this.DB_CONNECTION.on('error', function (error) { return console.error.bind(console, "Error na conex\u00E3o: " + error); });
        this.DB_CONNECTION.on('disconnected', function () { return console.log("Mongoose est\u00E1 desconectado do " + uri); });
    };
    DataBase.prototype.closeConnection = function (message, callback) {
        this.DB_CONNECTION.close(function () {
            console.log("Mongoose foi desconectado pelo: " + message);
            callback();
        });
    };
    return DataBase;
}());
exports["default"] = DataBase;
