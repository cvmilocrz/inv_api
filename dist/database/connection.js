"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConnection = getConnection;
Object.defineProperty(exports, "mysql", {
  enumerable: true,
  get: function get() {
    return _mysql["default"];
  }
});
var _mysql = _interopRequireDefault(require("mysql"));
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var dbSettings = {
  user: process.env.MYSQL_ADDON_USER || '',
  password: process.env.MYSQL_ADDON_PASSWORD || '',
  host: process.env.MYSQL_ADDON_HOST || '',
  database: process.env.MYSQL_ADDON_DB || '',
  port: process.env.MYSQL_ADDON_PORT || 3306
};
function getConnection() {
  var connection = _mysql["default"].createConnection(dbSettings);
  connection.connect(function (err) {
    if (err) {
      console.error('Error al conectar a la DB:', err);
      return;
    }
    console.log('Conectado a la DB');
  });
  return connection;
}