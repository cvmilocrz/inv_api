"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _querys = require("./querys.js");
Object.keys(_querys).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _querys[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _querys[key];
    }
  });
});
var _connection = require("./connection.js");
Object.keys(_connection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _connection[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _connection[key];
    }
  });
});