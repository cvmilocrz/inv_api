"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var verifyToken = exports.verifyToken = function verifyToken(req, res, next) {
  var token = req.headers.authorization;
  if (!token) {
    return res.status(403).json({
      atención: "Acceso no autorizado"
    });
  }
  _jsonwebtoken["default"].verify(token, process.env.API_KEY, function (err, decoded) {
    if (err) {
      return res.status(401).json({
        message: "No Autorizado"
      });
    }
    req.user = decoded;
    next();
  });
};