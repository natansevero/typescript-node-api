"use strict";
/*
  Classe principal da aplicação. Onde vamos configurar middlewares, conectar com banco
  de dados, configurar express

  O morgan irá gerar log em nosso console de todas as requisições
*/
exports.__esModule = true;
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var db_1 = require("./config/db");
var routes_1 = require("./modules/user/routes");
var App = (function () {
    function App() {
        this.app = express();
        this.middleware();
        this.routes();
        this.database = new db_1["default"]();
        this.dataBaseConnection();
    }
    App.prototype.middleware = function () {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    };
    App.prototype.routes = function () {
        this.app.route('/').get(function (req, res) { return res.status(200).json({ 'message': 'hello, world' }); });
        // this.app.route('/test').get((req, res) => res.status(200).json({ 'message': 'test route' }) );
        this.app.route('/api/v1/users').get(routes_1["default"].getAll);
        this.app.route('/api/v1/users/:id').get(routes_1["default"].getById);
        this.app.route('/api/v1/users').post(routes_1["default"].create);
        this.app.route('/api/v1/users/:id').put(routes_1["default"].update);
        this.app.route('/api/v1/users/:id')["delete"](routes_1["default"]["delete"]);
    };
    App.prototype.dataBaseConnection = function () {
        this.database.createConnection();
    };
    App.prototype.closeDataBaseConnection = function (message, callback) {
        this.database.closeConnection(message, function () { return callback(); });
    };
    return App;
}());
exports["default"] = new App();
